import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FeedbackService {
  async sendFeedback(uid: string, message: string): Promise<void> {
    // Burada Firebase veya başka bir backend'e gönderim yapılabilir
    // Demo: localStorage ile saklanıyor
    const feedbacks = JSON.parse(localStorage.getItem('feedbacks') || '[]');
    feedbacks.push({ uid, message, date: new Date().toISOString() });
    localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
    return Promise.resolve();
  }
}
