import { Component, inject, signal, effect } from '@angular/core';
import { UserService } from '../user';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.scss'
})
export class ProfileComponent {
  private userService = inject(UserService);
  profile = signal<any>({});
  error = signal<string>('');
  success = signal<string>('');
  uid = 'demo-student'; // Gerçek uygulamada auth'dan alınacak

  constructor() {
    effect(() => {
      this.loadProfile();
    });
  }

  async loadProfile() {
    try {
      const snap = await this.userService.getProfile(this.uid);
      this.profile.set(snap.data());
    } catch (err: any) {
      this.error.set('Profil yüklenemedi!');
    }
  }

  async updateProfile(data: any) {
    try {
      await this.userService.updateProfile(this.uid, data);
      this.success.set('Profil güncellendi!');
      this.error.set('');
      await this.loadProfile();
    } catch (err: any) {
      this.success.set('');
      this.error.set('Güncelleme başarısız!');
    }
  }
}
