import { Component, inject, signal, effect } from '@angular/core';
import { RewardService } from '../reward';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reward-history',
  imports: [CommonModule],
  templateUrl: './reward-history.html',
  styleUrl: './reward-history.scss'
})
export class RewardHistoryComponent {
  private rewardService = inject(RewardService);
  history = signal<any[]>([]);
  error = signal<string>('');
  uid = 'demo-student'; // Gerçek uygulamada auth'dan alınacak

  constructor() {
    effect(() => {
      this.loadHistory();
    });
  }

  async loadHistory() {
    try {
      const snap = await this.rewardService.getRewardHistory(this.uid);
      this.history.set(snap.docs.map(doc => doc.data()));
    } catch (err: any) {
      this.error.set('Ödül geçmişi yüklenemedi!');
    }
  }
}
