import { ReportService } from '../../../core/services/report.service';

export async function exportReportsToCSV(reportService: ReportService): Promise<string> {
  const userReport = await reportService.getUserReport();
  const lessonReport = await reportService.getLessonReport();
  const taskReport = await reportService.getTaskReport();
  const rewardReport = await reportService.getRewardReport();

  let csv = '';
  csv += 'Kullanıcı Raporu\nAd,Aktivite,Tarih\n';
  userReport.forEach(u => {
    csv += `${u.name},${u.activity},${new Date(u.date).toLocaleString()}\n`;
  });
  csv += '\nDers Raporu\nDers,Tamamlanan\n';
  lessonReport.forEach(l => {
    csv += `${l.title},${l.completed}\n`;
  });
  csv += '\nGörev Raporu\nGörev,Tamamlanan\n';
  taskReport.forEach(t => {
    csv += `${t.title},${t.completed}\n`;
  });
  csv += '\nÖdül Raporu\nÖdül,Kazanılan\n';
  rewardReport.forEach(r => {
    csv += `${r.title},${r.earned}\n`;
  });
  return csv;
}
