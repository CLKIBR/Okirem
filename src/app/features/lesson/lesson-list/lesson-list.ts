import { Component, inject, signal, effect } from '@angular/core';
import { LessonService } from '../lesson';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lesson-list',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './lesson-list.html',
  styleUrl: './lesson-list.scss'
})
export class LessonListComponent {
  private lessonService = inject(LessonService);
  lessons = signal<any[]>([]);
  error = signal<string>('');
  success = signal<string>('');

  constructor() {
    effect(() => {
      this.loadLessons();
    });
  }

  async loadLessons() {
    try {
      const snap = await this.lessonService.getLessons();
      this.lessons.set(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    } catch (err: any) {
      this.error.set('Dersler yüklenemedi!');
    }
  }

  async addLesson(data: any) {
    try {
      await this.lessonService.addLesson(data);
      this.success.set('Ders eklendi!');
      this.error.set('');
      await this.loadLessons();
    } catch (err: any) {
      this.success.set('');
      this.error.set('Ders eklenemedi!');
    }
  }
}
