import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FeedbackService } from '../../../core/services/feedback.service';

@Component({
  selector: 'app-feedback-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './feedback-form.html',
  styleUrl: './feedback-form.scss'
})
export class FeedbackFormComponent {
  message = signal<string>('');
  error = signal<string | null>(null);
  success = signal<string | null>(null);
  private feedbackService = inject(FeedbackService);
  uid = 'demo-user'; // Auth'dan alınacak

  async submit() {
    if (!this.message()) {
      this.error.set('Lütfen bir mesaj girin.');
      return;
    }
    try {
      await this.feedbackService.sendFeedback(this.uid, this.message());
      this.success.set('Geri bildiriminiz iletildi.');
      this.error.set(null);
      this.message.set('');
    } catch (err: any) {
      this.error.set('Geri bildirim iletilemedi: ' + (err?.message || err));
      this.success.set(null);
    }
  }
}
