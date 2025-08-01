import { Component, signal, inject } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { NotificationService } from '../../../core/services/notification.service';

@Component({
  selector: 'app-notification-detail',
  imports: [CommonModule, DatePipe],
  templateUrl: './notification-detail.html',
  styleUrl: './notification-detail.scss'
})
export class NotificationDetailComponent {
  notification = signal<any | null>(null);
  error = signal<string | null>(null);
  private notificationService = inject(NotificationService);

  async loadNotification(id: string) {
    try {
      // Firestore'da tekil bildirim alma örneği
      const snap = await this.notificationService.getNotification(id);
      this.notification.set(snap.exists() ? { id: snap.id, ...snap.data() } : null);
      this.error.set(null);
    } catch (err: any) {
      this.error.set('Bildirim yüklenemedi: ' + (err?.message || err));
    }
  }
}
