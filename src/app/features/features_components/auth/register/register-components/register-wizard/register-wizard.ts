import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  ngOnInit(): void {
    const queryRole = this.route.snapshot.queryParamMap.get('role') as UserRole;
    if (queryRole) this.role = queryRole;

    this.steps = this.registrationService.getStepsForRole(this.role);

    const group: any = {};
    for (const step of this.steps) {
      group[step.field] = step.required ? ['', Validators.required] : [''];
    }
    this.form = this.fb.group(group);
  }

  nextStep() {
    const field = this.steps[this.currentStep].field;
    const control = this.form.get(field);

    if (control?.invalid) {
      control.markAsTouched();
      return;
    }

    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    } else {
      this.router.navigate(['/register/wolcome']);
    }
  }

  isLastStep() {
    return this.currentStep === this.steps.length - 1;
  }

  submit() {
    if (!this.form.valid) {
      const field = this.steps[this.currentStep].field;
      this.form.get(field)?.markAsTouched();
      return;
    }

    // Formdan verileri al
    const formValue = this.form.value;
    // UserForRegisterRequest modeline uygun şekilde veriyi hazırla
    const userForRegisterRequest = {
      email: formValue.email,
      password: formValue.password,
      firstName: formValue.fullName?.split(' ')[0] || '',
      lastName: formValue.fullName?.split(' ')[1] || '',
      position: this.role,
      ...formValue,
    };

    this.authService.registerApplicant(userForRegisterRequest).subscribe({
      next: (tokenModel) => {
        let targetRoute = '/student';
        if (this.role === 'teacher') targetRoute = '/teacher';
        else if (this.role === 'parent') targetRoute = '/parent';
        this.router.navigate([targetRoute]);
      },
      error: (err) => {
        // TODO: kullanıcıya toast ile göster
      },
    });
  }

  onMultiSelectChange(field: string, event: Event): void {
    const input = event.target as HTMLInputElement;
    const selected = this.form.value[field] || [];

    if (input.checked) {
      this.form.patchValue({
        [field]: [...selected, input.value],
      });
    } else {
      this.form.patchValue({
        [field]: selected.filter((v: string) => v !== input.value),
      });
    }
  }
}
