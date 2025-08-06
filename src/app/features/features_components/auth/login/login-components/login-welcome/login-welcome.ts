import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../../services/concretes/auth.service';
import { ToastrModule } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login-welcome.html',
  styleUrls: ['./login-welcome.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule,ToastrModule]
})
export class LoginWelcome {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6)
        ]
      ]
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.error = null;
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    this.authService.login(this.loginForm.value).subscribe({
      next: () => {
        this.loading = false;
        // Token'daki tüm claim anahtar ve değerlerini konsola yazdır
        const decoded = this.authService.getDecodedToken();
        console.log('JWT decoded claims:', decoded);
        const position = this.authService.getUserPosition();
        console.log('Kullanıcı pozisyonu (token):', position);
        switch (position) {
          case 'Student':
            this.router.navigate(['/student']);
            break;
          case 'Teacher':
            this.router.navigate(['/teacher']);
            break;
          case 'Parent':
            this.router.navigate(['/parent']);
            break;
          case 'Admin':
            this.router.navigate(['/admin']);
            break;
          default:
            this.router.navigate(['/']);
        }
      },
      error: (err) => {
        this.loading = false;
        this.error = err?.error?.message || 'Giriş başarısız.';
      }
    });
  }
}
