import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaderboardService } from '../../../core/services/leaderboard.service';

@Component({
  selector: 'app-leaderboard-list',
  imports: [CommonModule],
  templateUrl: './leaderboard-list.html',
  styleUrl: './leaderboard-list.scss'
})
export class LeaderboardListComponent {
  error = signal<string | null>(null);
  leaderboard = signal<any[]>([]);

  private leaderboardService = inject(LeaderboardService);

  constructor() {
    this.loadLeaderboard();
  }

  loadLeaderboard() {
    this.leaderboardService.getLeaderboard().then(
      (users) => {
        this.leaderboard.set(users);
        this.error.set(null);
      },
      (err) => {
        this.error.set('Liderlik tablosu yüklenemedi: ' + (err?.message || err));
      }
    );
  }
}
