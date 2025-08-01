import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'auditLogFilter', standalone: true })
export class AuditLogFilterPipe implements PipeTransform {
  transform(logs: any[], search: string): any[] {
    if (!search) return logs;
    search = search.toLowerCase();
    return logs.filter(log =>
      (log.userId?.toLowerCase().includes(search) ||
       log.action?.toLowerCase().includes(search) ||
       JSON.stringify(log.details)?.toLowerCase().includes(search))
    );
  }
}
