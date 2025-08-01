import { Component, inject, signal } from '@angular/core';
import { AuthService } from '../auth';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  error = signal<string>('');

  async login(email: string, password: string) {
    try {
      await this.authService.login(email, password);
      this.error.set('');
      this.router.navigate(['/panel']);
    } catch (err: any) {
      this.error.set(err.message || 'Giriş başarısız!');
    }
  }
}
