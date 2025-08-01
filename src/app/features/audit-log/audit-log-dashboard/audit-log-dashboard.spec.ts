// Test: AuditLogDashboardComponent
import { AuditLogDashboardComponent } from './audit-log-dashboard';
import { AuditLogService } from '../../../core/services/audit-log.service';

describe('AuditLogDashboardComponent', () => {
  let component: AuditLogDashboardComponent;
  let auditLogServiceSpy: jasmine.SpyObj<AuditLogService>;

  beforeEach(() => {
    auditLogServiceSpy = jasmine.createSpyObj('AuditLogService', ['getLogs']);
    component = new AuditLogDashboardComponent();
    (component as any).auditLogService = auditLogServiceSpy;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load logs', async () => {
    const mockLogs = [{ user: 'Ali', action: 'Giriş', date: new Date() }];
    auditLogServiceSpy.getLogs.and.resolveTo(mockLogs);
    await component.loadLogs();
    expect(component.logs()).toEqual(mockLogs);
    expect(component.error()).toBeNull();
  });

  it('should handle error on logs load', async () => {
    auditLogServiceSpy.getLogs.and.rejectWith(new Error('Network error'));
    await component.loadLogs();
    expect(component.error()).toContain('Loglar yüklenemedi');
  });
});
