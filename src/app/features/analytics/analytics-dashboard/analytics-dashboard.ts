import { Component, signal, inject } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsService } from '../../../core/services/analytics.service';

@Component({
  selector: 'app-analytics-dashboard',
  imports: [CommonModule],
  templateUrl: './analytics-dashboard.html',
  styleUrl: './analytics-dashboard.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnalyticsDashboardComponent {
  userStats = signal<any>(null);
  lessonStats = signal<any>(null);
  taskStats = signal<any>(null);
  rewardStats = signal<any>(null);
  error = signal<string | null>(null);
  private analyticsService = inject(AnalyticsService);

  ngOnInit() {
    this.loadAnalytics();
  }

  async loadAnalytics() {
    try {
      const stats = await this.analyticsService.getAllStats();
      this.userStats.set(stats.userStats);
      this.lessonStats.set(stats.lessonStats);
      this.taskStats.set(stats.taskStats);
      this.rewardStats.set(stats.rewardStats);
      this.error.set(null);
    } catch (err: any) {
      this.error.set('Analizler yüklenemedi: ' + (err?.message || err));
    }
  }
}
