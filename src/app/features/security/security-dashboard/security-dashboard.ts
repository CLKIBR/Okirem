import { Component, signal, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityService } from '../../../core/services/security.service';

@Component({
  selector: 'app-security-dashboard',
  imports: [CommonModule],
  templateUrl: './security-dashboard.html',
  styleUrl: './security-dashboard.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SecurityDashboardComponent {
  sessions = signal<any[]>([]);
  error = signal<string | null>(null);
  private securityService = inject(SecurityService);

  ngOnInit() {
    this.loadSessions();
  }

  async loadSessions() {
    try {
      this.sessions.set(await this.securityService.getActiveSessions());
      this.error.set(null);
    } catch (err: any) {
      this.error.set('Oturumlar yüklenemedi: ' + (err?.message || err));
    }
  }
}
