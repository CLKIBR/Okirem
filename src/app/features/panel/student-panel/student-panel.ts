
import { Component, inject, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonService } from '../../lesson/lesson';
import { TaskService } from '../../task/task';
import { RewardService } from '../../reward/reward';
import { Leaderboard } from '../../leaderboard/leaderboard';
import { UserService } from '../../user/user';

@Component({
  selector: 'app-student-panel',
  imports: [CommonModule],
  templateUrl: './student-panel.html',
  styleUrl: './student-panel.scss'
})
export class StudentPanelComponent {
  private lessonService = inject(LessonService);
  private taskService = inject(TaskService);
  private rewardService = inject(RewardService);
  private leaderboardService = inject(Leaderboard);
  private userService = inject(UserService);

  lessons = signal<any[]>([]);
  tasks = signal<any[]>([]);
  rewards = signal<any[]>([]);
  leaderboard = signal<any[]>([]);
  profile = signal<any>({});

  uid = 'demo-student'; // Gerçek uygulamada auth'dan alınacak

  constructor() {
    effect(() => {
      this.loadPanelData();
    });
  }

  async loadPanelData() {
    // Dersler
    const lessonsSnap = await this.lessonService.getLessons();
    this.lessons.set(lessonsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    // Görevler
    const tasksSnap = await this.taskService.getTasks();
    this.tasks.set(tasksSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    // Ödüller
    const rewardsSnap = await this.rewardService.getRewards();
    this.rewards.set(rewardsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    // Liderlik tablosu
    const leaderboardSnap = await this.leaderboardService.getLeaderboard(10);
    this.leaderboard.set(leaderboardSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    // Profil
    const profileSnap = await this.userService.getProfile(this.uid);
    this.profile.set(profileSnap.data());
  }

  async completeTask(taskId: string) {
    // Görev tamamlama örneği
    await this.taskService.playTask(taskId, { completed: true });
    await this.loadPanelData();
  }

  async earnReward(rewardId: string) {
    // Ödül kazanma örneği
    await this.rewardService.earnReward({ userId: this.uid, rewardId, date: new Date() });
    await this.loadPanelData();
  }

  async updateProfile(data: any) {
    await this.userService.updateProfile(this.uid, data);
    await this.loadPanelData();
  }
}
