import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleManagementService } from '../../../core/services/role-management.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-role-management-dashboard',
  imports: [CommonModule,FormsModule],
  templateUrl: './role-management-dashboard.html',
  styleUrl: './role-management-dashboard.scss'
})
export class RoleManagementDashboardComponent {
  roles = signal<string[]>([]);
  selectedUserId = signal<string>('');
  selectedRole = signal<string>('');
  error = signal<string | null>(null);
  private roleService = inject(RoleManagementService);

  ngOnInit() {
    this.loadRoles();
  }

  async loadRoles() {
    try {
      this.roles.set(await this.roleService.getRoles());
      this.error.set(null);
    } catch (err: any) {
      this.error.set('Roller yüklenemedi: ' + (err?.message || err));
    }
  }

  async setUserRole() {
    try {
      await this.roleService.setUserRole(this.selectedUserId(), this.selectedRole());
      this.error.set(null);
    } catch (err: any) {
      this.error.set('Rol atanamadı: ' + (err?.message || err));
    }
  }
}
