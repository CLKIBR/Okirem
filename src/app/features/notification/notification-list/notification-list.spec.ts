// Test: NotificationListComponent
import { NotificationListComponent } from './notification-list';
import { NotificationService } from '../../../core/services/notification.service';

describe('NotificationListComponent', () => {
  let component: NotificationListComponent;
  let notificationServiceSpy: jasmine.SpyObj<NotificationService>;

  beforeEach(() => {
    notificationServiceSpy = jasmine.createSpyObj('NotificationService', ['getNotifications', 'markAsRead']);
    component = new NotificationListComponent();
    (component as any).notificationService = notificationServiceSpy;
    component.uid = 'demo-user';
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load notifications', async () => {
    const mockSnap = {
      docs: [{ id: '1', data: () => ({ title: 'Bildirim', read: false }) }],
      size: 1,
      empty: false,
      forEach: (cb: any) => mockSnap.docs.forEach(cb),
      docChanges: () => [],
    };
    notificationServiceSpy.getNotifications.and.resolveTo(mockSnap as any);
    await component.loadNotifications();
    expect(component.notifications()).toEqual([{ id: '1', title: 'Bildirim', read: false }]);
    expect(component.error()).toBeNull();
  });

  it('should handle error on notification load', async () => {
    notificationServiceSpy.getNotifications.and.rejectWith(new Error('Network error'));
    await component.loadNotifications();
    expect(component.error()).toContain('Bildirimler yüklenemedi');
  });

  it('should mark notification as read', async () => {
    notificationServiceSpy.markAsRead.and.resolveTo(undefined);
    spyOn(component, 'loadNotifications');
    await component.markAsRead('1');
    expect(notificationServiceSpy.markAsRead).toHaveBeenCalledWith('1');
    expect(component.loadNotifications).toHaveBeenCalled();
  });
});
