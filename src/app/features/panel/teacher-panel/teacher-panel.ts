import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
// Servisler örnek: LessonService, TaskService, UserService, RewardService, LeaderboardService
// Gerçek servis yolları mimari plana göre güncellenmeli
import { LessonService } from '../../lesson/lesson';
import { TaskService } from '../../task/task';
import { UserService } from '../../user/user';
import { RewardService } from '../../reward/reward';
import { LeaderboardService } from '../../../core/services/leaderboard.service';

@Component({
  selector: 'app-teacher-panel',
  imports: [CommonModule],
  templateUrl: './teacher-panel.html',
  styleUrl: './teacher-panel.scss'
})
export class TeacherPanelComponent {
  lessons = signal<any[]>([]);
  tasks = signal<any[]>([]);
  students = signal<any[]>([]);
  leaderboard = signal<any[]>([]);

  private lessonService = inject(LessonService);
  private taskService = inject(TaskService);
  private userService = inject(UserService);
  private rewardService = inject(RewardService);
  private leaderboardService = inject(LeaderboardService);

  constructor() {
    this.loadPanelData();
  }

  async loadPanelData() {
    // Dersler
    const lessonsSnap = await this.lessonService.getLessons();
    this.lessons.set(lessonsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    // Görevler
    const tasksSnap = await this.taskService.getTasks();
    this.tasks.set(tasksSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    // Öğrenciler
    // getStudents metodu yok, demo veri
    this.students.set([
      { id: 'demo1', name: 'Öğrenci 1', email: 'ogrenci1@okirem.com' },
      { id: 'demo2', name: 'Öğrenci 2', email: 'ogrenci2@okirem.com' }
    ]);
    // Liderlik tablosu
    const leaderboardArr = await this.leaderboardService.getLeaderboard() as any[];
    this.leaderboard.set(leaderboardArr.slice(0, 10));
  }

  async addLesson() {
    await this.lessonService.addLesson({ title: 'Yeni Ders' });
    await this.loadPanelData();
  }
  async editLesson(lessonId: string) {
    // updateLesson metodu yok, stub
    // await this.lessonService.updateLesson(lessonId, { title: 'Düzenlenmiş Ders' });
    // await this.loadPanelData();
  }
  async deleteLesson(lessonId: string) {
    // deleteLesson metodu yok, stub
    // await this.lessonService.deleteLesson(lessonId);
    // await this.loadPanelData();
  }

  async addTask() {
    await this.taskService.addTask({ title: 'Yeni Görev' });
    await this.loadPanelData();
  }
  async editTask(taskId: string) {
    // updateTask metodu yok, stub
    // await this.taskService.updateTask(taskId, { title: 'Düzenlenmiş Görev' });
    // await this.loadPanelData();
  }
  async deleteTask(taskId: string) {
    // deleteTask metodu yok, stub
    // await this.taskService.deleteTask(taskId);
    // await this.loadPanelData();
  }

  async giveReward(studentId: string) {
    await this.rewardService.earnReward({ userId: studentId, rewardId: 'demo-reward', date: new Date() });
    await this.loadPanelData();
  }
}
