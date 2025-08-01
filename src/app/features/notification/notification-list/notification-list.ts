import { Component, signal, inject } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { NotificationService } from '../../../core/services/notification.service';

@Component({
  selector: 'app-notification-list',
  imports: [CommonModule, DatePipe],
  templateUrl: './notification-list.html',
  styleUrl: './notification-list.scss'
})
export class NotificationListComponent {
  notifications = signal<any[]>([]);
  error = signal<string | null>(null);
  private notificationService = inject(NotificationService);
  uid = 'demo-user'; // Auth'dan alınacak

  constructor() {
    this.loadNotifications();
  }

  async loadNotifications() {
    try {
      const snap = await this.notificationService.getNotifications(this.uid);
      this.notifications.set(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      this.error.set(null);
    } catch (err: any) {
      this.error.set('Bildirimler yüklenemedi: ' + (err?.message || err));
    }
  }

  async markAsRead(id: string) {
    await this.notificationService.markAsRead(id);
    await this.loadNotifications();
  }
}
