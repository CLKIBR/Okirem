import { Component, signal } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-parent-panel',
  imports: [CommonModule, DatePipe],
  templateUrl: './parent-panel.html',
  styleUrl: './parent-panel.scss'
})
export class ParentPanelComponent {
  students = signal<any[]>([
    { id: 'student1', name: 'Öğrenci 1', email: 'ogrenci1@okirem.com', points: 120 },
    { id: 'student2', name: 'Öğrenci 2', email: 'ogrenci2@okirem.com', points: 95 }
  ]);
  selectedStudent = signal<any | null>(null);
  lessons = signal<any[]>([]);
  tasks = signal<any[]>([]);
  rewards = signal<any[]>([]);

  viewStudent(studentId: string) {
    const student = this.students().find(s => s.id === studentId);
    this.selectedStudent.set(student);
    // Demo: öğrenciye ait ders/görev/ödül geçmişi
    this.lessons.set([
      { title: 'Matematik' },
      { title: 'Fen Bilimleri' }
    ]);
    this.tasks.set([
      { title: 'Ödev 1' },
      { title: 'Proje 2' }
    ]);
    this.rewards.set([
      { title: 'Yıldız', date: new Date() },
      { title: 'Rozet', date: new Date() }
    ]);
  }
}
