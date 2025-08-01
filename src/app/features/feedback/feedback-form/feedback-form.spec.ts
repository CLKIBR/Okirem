// Test: FeedbackFormComponent
import { FeedbackFormComponent } from './feedback-form';
import { FeedbackService } from '../../../core/services/feedback.service';

describe('FeedbackFormComponent', () => {
  let component: FeedbackFormComponent;
  let feedbackServiceSpy: jasmine.SpyObj<FeedbackService>;

  beforeEach(() => {
    feedbackServiceSpy = jasmine.createSpyObj('FeedbackService', ['sendFeedback']);
    component = new FeedbackFormComponent();
    (component as any).feedbackService = feedbackServiceSpy;
    component.uid = 'demo-user';
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show error if message is empty', async () => {
    component.message.set('');
    await component.submit();
    expect(component.error()).toContain('Lütfen bir mesaj girin.');
  });

  it('should send feedback and show success', async () => {
    component.message.set('Harika bir platform!');
    feedbackServiceSpy.sendFeedback.and.resolveTo(undefined);
    await component.submit();
    expect(feedbackServiceSpy.sendFeedback).toHaveBeenCalledWith('demo-user', 'Harika bir platform!');
    expect(component.success()).toContain('Geri bildiriminiz iletildi.');
    expect(component.error()).toBeNull();
    expect(component.message()).toBe('');
  });

  it('should handle error on feedback send', async () => {
    component.message.set('Test hata');
    feedbackServiceSpy.sendFeedback.and.rejectWith(new Error('Network error'));
    await component.submit();
    expect(component.error()).toContain('Geri bildirim iletilemedi');
    expect(component.success()).toBeNull();
  });
});
