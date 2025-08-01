import { Component, inject, signal, effect } from '@angular/core';
import { RewardService } from '../reward';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reward-store',
  imports: [CommonModule],
  templateUrl: './reward-store.html',
  styleUrl: './reward-store.scss'
})
export class RewardStoreComponent {
  private rewardService = inject(RewardService);
  rewards = signal<any[]>([]);
  error = signal<string>('');
  success = signal<string>('');
  uid = 'demo-student'; // Gerçek uygulamada auth'dan alınacak

  constructor() {
    effect(() => {
      this.loadRewards();
    });
  }

  async loadRewards() {
    try {
      const snap = await this.rewardService.getRewards();
      this.rewards.set(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    } catch (err: any) {
      this.error.set('Ödüller yüklenemedi!');
    }
  }

  async earnReward(rewardId: string) {
    try {
      await this.rewardService.earnReward({ userId: this.uid, rewardId, date: new Date() });
      this.success.set('Ödül kazanıldı!');
      this.error.set('');
      await this.loadRewards();
    } catch (err: any) {
      this.success.set('');
      this.error.set('Ödül kazanılamadı!');
    }
  }
}
