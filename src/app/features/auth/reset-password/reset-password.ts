import { Component, inject, signal } from '@angular/core';
import { AuthService } from '../auth';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  imports: [CommonModule, FormsModule],
  templateUrl: './reset-password.html',
  styleUrl: './reset-password.scss'
})
export class ResetPasswordComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  error = signal<string>('');
  success = signal<string>('');

  async resetPassword(email: string) {
    try {
      await this.authService.resetPassword(email);
      this.error.set('');
      this.success.set('Şifre sıfırlama e-postası gönderildi!');
    } catch (err: any) {
      this.success.set('');
      this.error.set(err.message || 'Sıfırlama başarısız!');
    }
  }
}
