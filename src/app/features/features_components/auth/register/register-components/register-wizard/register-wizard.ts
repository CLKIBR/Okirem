import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  FormsModule,
} from '@angular/forms';
import {
  RegistrationService,
  WizardStep,
  UserRole,
} from './../../../../../services';
import { AuthService } from 'src/app/features/services/concretes/auth.service';
import { Lagel } from 'src/app/features/features_components/legal/lagel/lagel';
import {
  FormControlDirective,
  FormSelectDirective,
  FormCheckComponent,
  FormCheckInputDirective,
  FormCheckLabelDirective,
} from '@coreui/angular';

@Component({
  selector: 'app-register-wizard',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    Lagel,
    FormControlDirective,
    FormSelectDirective,
    FormCheckComponent,
    FormCheckInputDirective,
    FormCheckLabelDirective,
  ],
  templateUrl: './register-wizard.html',
  styleUrl: './register-wizard.scss',
})
export class RegisterWizard implements OnInit {
  role: UserRole = 'student';
  steps: WizardStep[] = [];
  currentStep = 0;
  form!: FormGroup;

  private route = inject(ActivatedRoute);
  private registrationService = inject(RegistrationService);
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  private toPosition(role: UserRole): number {
    switch (role) {
      case 'teacher':
        return 1;
      case 'parent':
        return 2;
      default:
        return 0; // student
    }
  }

  ngOnInit(): void {
    const queryRole =
      (this.route.snapshot.queryParamMap.get('role') as UserRole) ||
      'student';
    this.role = queryRole;

    this.steps = this.registrationService.getStepsForRole(this.role);

    const group: Record<string, any> = {};

    // Steps'ten gelen alanları ekle (nameStep bir grup; position step olarak kullanılmayacak)
    for (const step of this.steps) {
      if (step.field === 'nameStep' || step.field === 'position') continue;
      group[step.field] = step.required ? ['', Validators.required] : [''];
    }

    // nameStep için gerçek kontroller
    group['firstName'] = ['', Validators.required];
    group['lastName'] = ['', Validators.required];

    // API zorunlu ek alanlar (step'siz)
    group['userName'] = ['', Validators.required];
    group['position'] = [this.toPosition(this.role), Validators.required];

    // Sıkı validasyon (varsa)
    if (group['email']) {
      group['email'][1] = [Validators.required, Validators.email];
    }
    if (group['password']) {
      group['password'][1] = [Validators.required, Validators.minLength(6)];
    }

    this.form = this.fb.group(group);

    // E-posta yazıldıkça userName'e otomatik kopya (boşsa)
    this.form.get('email')?.valueChanges.subscribe((val) => {
      const currentUserName = this.form.get('userName')?.value;
      if (!currentUserName && typeof val === 'string') {
        const local = (val.split('@')[0] || '').trim();
        if (local)
          this.form.get('userName')?.setValue(local, { emitEvent: false });
      }
    });
  }

  nextStep() {
    const field = this.steps[this.currentStep]?.field;

    if (field === 'nameStep') {
      const first = this.form.get('firstName');
      const last = this.form.get('lastName');
      if (first?.invalid || last?.invalid) {
        first?.markAsTouched();
        last?.markAsTouched();
        return;
      }
    } else {
      const control = this.form.get(field);
      if (control?.invalid) {
        control.markAsTouched();
        return;
      }
    }

    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    } else {
      this.router.navigate(['/register/welcome']);
    }
  }

  isLastStep() {
    return this.currentStep === this.steps.length - 1;
  }

  submit() {
    if (!this.form.valid) {
      const field = this.steps[this.currentStep]?.field;
      if (field === 'nameStep') {
        this.form.get('firstName')?.markAsTouched();
        this.form.get('lastName')?.markAsTouched();
      } else {
        this.form.get(field)?.markAsTouched();
      }
      return;
    }

        const v = this.form.value;

        // Backend enum değerleri
        const GenderType = {
          NotSpecified: 0,
          Male: 1,
          Female: 2,
          Other: 3
        };
        const PositionType = {
          NotSpecified: 0,
          Student: 1,
          Teacher: 2,
          Admin: 3,
          Parent: 4,
          Other: 5
        };
        const LanguageType = {
          NotSpecified: 0,
          Turkish: 1,
          English: 2,
          German: 3,
          French: 4
        };

        // Formdan gelen değerleri enum ile eşleştir
        const userForRegisterRequest = {
          email: v.email,
          password: v.password,
          firstName: v.firstName || '',
          lastName: v.lastName || '',
          gender: Object.values(GenderType).includes(v.gender) ? v.gender : GenderType.NotSpecified,
          position: Object.values(PositionType).includes(v.position) ? v.position : PositionType.NotSpecified,
          preferredLanguage: Object.values(LanguageType).includes(v.preferredLanguage) ? v.preferredLanguage : LanguageType.NotSpecified,
        };

        console.log('Kayıt için gönderilen değerler:', userForRegisterRequest);

        this.authService.register(userForRegisterRequest).subscribe({
          next: () => {
            let targetRoute = '/student';
            if (this.role === 'teacher') targetRoute = '/teacher';
            else if (this.role === 'parent') targetRoute = '/parent';
            this.router.navigate([targetRoute]);
          },
          error: () => {
            // TODO: toast/snackbar
          },
        });
  }

  onMultiSelectChange(field: string, event: Event): void {
    const input = event.target as HTMLInputElement;
    const selected = this.form.value[field] || [];

    if (input.checked) {
      this.form.patchValue({ [field]: [...selected, input.value] });
    } else {
      this.form.patchValue({
        [field]: selected.filter((v: string) => v !== input.value),
      });
    }
  }
}
