// Test: AnalyticsDashboardComponent
import { AnalyticsDashboardComponent } from './analytics-dashboard';
import { AnalyticsService } from '../../../core/services/analytics.service';

describe('AnalyticsDashboardComponent', () => {
  let component: AnalyticsDashboardComponent;
  let analyticsServiceSpy: jasmine.SpyObj<AnalyticsService>;

  beforeEach(() => {
    analyticsServiceSpy = jasmine.createSpyObj('AnalyticsService', ['getAllStats']);
    component = new AnalyticsDashboardComponent();
    (component as any).analyticsService = analyticsServiceSpy;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load analytics stats', async () => {
    const mockStats = {
      userStats: { total: 10 },
      lessonStats: { total: 5 },
      taskStats: { total: 7 },
      rewardStats: { total: 3 }
    };
    analyticsServiceSpy.getAllStats.and.resolveTo(mockStats);
    await component.loadAnalytics();
    expect(component.userStats()).toEqual(mockStats.userStats);
    expect(component.lessonStats()).toEqual(mockStats.lessonStats);
    expect(component.taskStats()).toEqual(mockStats.taskStats);
    expect(component.rewardStats()).toEqual(mockStats.rewardStats);
    expect(component.error()).toBeNull();
  });

  it('should handle error on analytics load', async () => {
    analyticsServiceSpy.getAllStats.and.rejectWith(new Error('Network error'));
    await component.loadAnalytics();
    expect(component.error()).toContain('Analizler yüklenemedi');
  });
});
