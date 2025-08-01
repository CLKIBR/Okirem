import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelService } from '../../../core/services/admin-panel.service';

@Component({
  selector: 'app-admin-panel-dashboard',
  imports: [CommonModule],
  templateUrl: './admin-panel-dashboard.html',
  styleUrl: './admin-panel-dashboard.scss'
})
export class AdminPanelDashboardComponent {
  users = signal<any[] | null>(null);
  error = signal<string | null>(null);
  private adminPanelService = inject(AdminPanelService);

  ngOnInit() {
    this.loadUsers();
  }

  async loadUsers() {
    try {
      this.users.set(await this.adminPanelService.getUserList() ?? []);
      this.error.set(null);
    } catch (err: any) {
      this.error.set('Kullanıcılar yüklenemedi: ' + (err?.message || err));
    }
  }

  async setRole(id: string, role: string) {
    await this.adminPanelService.setUserRole(id, role);
    this.loadUsers();
  }
}
