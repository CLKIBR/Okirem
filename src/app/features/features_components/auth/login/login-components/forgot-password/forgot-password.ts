import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../../../services/concretes/auth.service';
import { ToastrModule } from 'ngx-toastr';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.html',
  styleUrls: ['./forgot-password.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, ToastrModule]
})
export class ForgotPassword {
  forgotForm: FormGroup;
  loading = false;
  submitted = false;
  error: string | null = null;
  success: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.forgotForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  get f() { return this.forgotForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.error = null;
    this.success = null;
    if (this.forgotForm.invalid) {
      return;
    }
    this.loading = true;
    this.authService.sendForgotPasswordEmail({ email: this.forgotForm.value.email }).subscribe({
      next: (res) => {
        this.loading = false;
        this.success = 'Şifre sıfırlama e-postası gönderildi.';
      },
      error: (err) => {
        this.loading = false;
        this.error = err?.error?.message || 'İşlem başarısız.';
      }
    });
  }
}
