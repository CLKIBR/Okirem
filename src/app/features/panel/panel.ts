import { Injectable } from '@angular/core';
import { Firestore, collection, getDocs, query, where } from '@angular/fire/firestore';

@Injectable({ providedIn: 'root' })
export class PanelService {
  constructor(private firestore: Firestore) {}

  getStudentPanel(uid: string) {
    // Öğrenciye özel görev, ders, ödül verilerini çek
    return getDocs(query(collection(this.firestore, 'tasks'), where('userId', '==', uid)));
  }

  getTeacherPanel(uid: string) {
    // Öğretmenin atadığı görevler, takip ettiği öğrenciler
    return getDocs(query(collection(this.firestore, 'tasks'), where('teacherId', '==', uid)));
  }

  getParentPanel(uid: string) {
    // Veliye özel çocuk gelişim raporları
    return getDocs(query(collection(this.firestore, 'reports'), where('parentId', '==', uid)));
  }
}
