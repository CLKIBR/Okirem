import { AuditLogService } from '../../../core/services/audit-log.service';

export async function exportAuditLogsToCSV(auditLogService: AuditLogService): Promise<string> {
  const logs = await auditLogService.getLogs();
  if (!logs.length) return '';
  const header = ['Kullanıcı', 'İşlem', 'Detay', 'Tarih'];
  const rows = logs.map(log => [
    log.userId,
    log.action,
    JSON.stringify(log.details),
    new Date(log.date).toLocaleString()
  ]);
  const csv = [header, ...rows].map(row => row.join(',')).join('\n');
  return csv;
}
