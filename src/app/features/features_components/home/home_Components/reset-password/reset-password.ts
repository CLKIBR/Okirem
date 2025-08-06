import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../../services/concretes/auth.service';
import { ToastrModule } from 'ngx-toastr';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.html',
  styleUrls: ['./reset-password.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, ToastrModule]
})
export class ResetPassword {
  resetForm: FormGroup;
  loading = false;
  submitted = false;
  error: string | null = null;
  success: string | null = null;
  token: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.resetForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: this.passwordsMatchValidator });
    this.route.queryParams.subscribe(params => {
      this.token = params['token'] || null;
    });
  }

  get f() { return this.resetForm.controls; }

  passwordsMatchValidator(form: FormGroup) {
    return form.get('password')!.value === form.get('confirmPassword')!.value ? null : { mismatch: true };
  }

  onSubmit() {
    this.submitted = true;
    this.error = null;
    this.success = null;
    if (this.resetForm.invalid || !this.token) {
      if (!this.token) this.error = 'Geçersiz veya eksik token.';
      return;
    }
    this.loading = true;
    this.authService.resetPassword(this.token, { password: this.resetForm.value.password }).subscribe({
      next: () => {
        this.loading = false;
        this.success = 'Şifreniz başarıyla sıfırlandı. Giriş yapabilirsiniz.';
        setTimeout(() => this.router.navigate(['/login']), 2000);
      },
      error: (err) => {
        this.loading = false;
        this.error = err?.error?.message || 'Şifre sıfırlama başarısız.';
      }
    });
  }
}
