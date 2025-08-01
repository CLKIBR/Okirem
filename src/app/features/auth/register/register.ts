import { Component, inject, signal } from '@angular/core';
import { AuthService } from '../auth';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class RegisterComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  error = signal<string>('');

  async register(email: string, password: string) {
    try {
      await this.authService.register(email, password);
      this.error.set('');
      this.router.navigate(['/panel']);
    } catch (err: any) {
      this.error.set(err.message || 'Kayıt başarısız!');
    }
  }
}
