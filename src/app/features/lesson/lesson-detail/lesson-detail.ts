import { Component, inject, signal, effect } from '@angular/core';
import { LessonService } from '../lesson';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lesson-detail',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './lesson-detail.html',
  styleUrl: './lesson-detail.scss'
})
export class LessonDetailComponent {
  private lessonService = inject(LessonService);
  private route = inject(ActivatedRoute);
  lesson = signal<any>(null);
  error = signal<string>('');
  success = signal<string>('');
  id = '';

  constructor() {
    effect(() => {
      this.id = this.route.snapshot.paramMap.get('id') || '';
      this.loadLesson();
    });
  }

  async loadLesson() {
    try {
      const snap = await this.lessonService.getLesson(this.id);
      this.lesson.set({ id: this.id, ...snap.data() });
    } catch (err: any) {
      this.error.set('Ders yüklenemedi!');
    }
  }

  async updateLesson(data: any) {
    try {
      await this.lessonService.addLesson({ ...data, id: this.id });
      this.success.set('Ders güncellendi!');
      this.error.set('');
      await this.loadLesson();
    } catch (err: any) {
      this.success.set('');
      this.error.set('Güncelleme başarısız!');
    }
  }
}
