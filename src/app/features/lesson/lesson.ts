import { Injectable } from '@angular/core';
import { Firestore, collection, getDocs, doc, getDoc, addDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LessonService {
  constructor(private firestore: Firestore) {}

  getLessons() {
    const lessonsRef = collection(this.firestore, 'lessons');
    return getDocs(lessonsRef);
  }

  getLesson(id: string) {
    const lessonRef = doc(this.firestore, `lessons/${id}`);
    return getDoc(lessonRef);
  }

  addLesson(data: any) {
    const lessonsRef = collection(this.firestore, 'lessons');
    return addDoc(lessonsRef, data);
  }
}
