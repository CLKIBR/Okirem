// Test: ReportDashboardComponent
import { ReportDashboardComponent } from './report-dashboard';
describe('ReportDashboardComponent', () => {
  it('should create', () => {
    const comp = new ReportDashboardComponent();
    expect(comp).toBeTruthy();
  });

  it('should export CSV with correct headers', async () => {
    const reportServiceSpy = jasmine.createSpyObj('ReportService', [
      'getUserReport',
      'getLessonReport',
      'getTaskReport',
      'getRewardReport',
    ]);
    const component = new ReportDashboardComponent();
    (component as any).reportService = reportServiceSpy;
    reportServiceSpy.getUserReport.and.resolveTo([
      { name: 'Ali', activity: 'Giriş', date: new Date() },
    ]);
    reportServiceSpy.getLessonReport.and.resolveTo([
      { title: 'Matematik', completed: 5 },
    ]);
    reportServiceSpy.getTaskReport.and.resolveTo([
      { title: 'Ödev', completed: 3 },
    ]);
    reportServiceSpy.getRewardReport.and.resolveTo([
      { title: 'Rozet', earned: 2 },
    ]);
    const csv = await component.exportCSV();
    expect(csv).toContain('Kullanıcı Raporu');
    expect(csv).toContain('Ders Raporu');
    expect(csv).toContain('Görev Raporu');
    expect(csv).toContain('Ödül Raporu');
  });
});
