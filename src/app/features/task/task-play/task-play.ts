import { Component, inject, signal, effect } from '@angular/core';
import { TaskService } from '../task';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-play',
  imports: [CommonModule, RouterLink],
  templateUrl: './task-play.html',
  styleUrl: './task-play.scss'
})
export class TaskPlayComponent {
  private taskService = inject(TaskService);
  private route = inject(ActivatedRoute);
  task = signal<any>(null);
  error = signal<string>('');
  success = signal<string>('');
  id = '';

  constructor() {
    effect(() => {
      this.id = this.route.snapshot.paramMap.get('id') || '';
      this.loadTask();
    });
  }

  async loadTask() {
    try {
      const snap = await this.taskService.getTask(this.id);
      this.task.set({ id: this.id, ...snap.data() });
    } catch (err: any) {
      this.error.set('Görev yüklenemedi!');
    }
  }

  async playTask() {
    try {
      await this.taskService.playTask(this.id, { completed: true });
      this.success.set('Görev tamamlandı!');
      this.error.set('');
      await this.loadTask();
    } catch (err: any) {
      this.success.set('');
      this.error.set('Tamamlama başarısız!');
    }
  }
}
