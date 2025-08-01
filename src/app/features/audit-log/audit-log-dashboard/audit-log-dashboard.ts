import { Component, signal, inject } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { AuditLogService } from '../../../core/services/audit-log.service';
import { FormsModule } from '@angular/forms';
import { AuditLogFilterPipe } from "./audit-log-dashboard.filter";
import { exportAuditLogsToCSV } from './audit-log-dashboard.export';

@Component({
  selector: 'app-audit-log-dashboard',
  imports: [CommonModule, DatePipe, FormsModule, AuditLogFilterPipe],
  templateUrl: './audit-log-dashboard.html',
  styleUrl: './audit-log-dashboard.scss'
})
export class AuditLogDashboardComponent {
  async exportCSV() {
    const csv = await exportAuditLogsToCSV(this.auditLogService);
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'audit-logs.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  }
  logs = signal<any[]>([]);
  error = signal<string | null>(null);
  private _search = signal<string>('');
  private auditLogService = inject(AuditLogService);

  get search() {
    return this._search();
  }
  set search(val: string) {
    this._search.set(val);
  }

  ngOnInit() {
    this.loadLogs();
  }

  async loadLogs() {
    try {
      this.logs.set(await this.auditLogService.getLogs());
      this.error.set(null);
    } catch (err: any) {
      this.error.set('Loglar yüklenemedi: ' + (err?.message || err));
    }
  }
}
