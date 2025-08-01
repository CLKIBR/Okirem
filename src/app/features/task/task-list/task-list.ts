import { Component, inject, signal, effect } from '@angular/core';
import { TaskService } from '../task';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss'
})
export class TaskListComponent {
  private taskService = inject(TaskService);
  tasks = signal<any[]>([]);
  error = signal<string>('');
  success = signal<string>('');

  constructor() {
    effect(() => {
      this.loadTasks();
    });
  }

  async loadTasks() {
    try {
      const snap = await this.taskService.getTasks();
      this.tasks.set(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    } catch (err: any) {
      this.error.set('Görevler yüklenemedi!');
    }
  }

  async addTask(data: any) {
    try {
      await this.taskService.addTask(data);
      this.success.set('Görev eklendi!');
      this.error.set('');
      await this.loadTasks();
    } catch (err: any) {
      this.success.set('');
      this.error.set('Görev eklenemedi!');
    }
  }
}
