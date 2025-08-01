import { Injectable } from '@angular/core';
import { Firestore, collection, getDocs, addDoc, doc, updateDoc, getDoc } from '@angular/fire/firestore';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  constructor(private firestore: Firestore) {}

  getNotifications(uid: string) {
    const notificationsRef = collection(this.firestore, 'notifications');
    // Filtreleme: Firestore sorgusu ile ilgili kullanıcıya ait bildirimler alınabilir
    return getDocs(notificationsRef);
  }

  getNotification(id: string) {
    const notificationRef = doc(this.firestore, `notifications/${id}`);
    return getDoc(notificationRef);
  }

  addNotification(data: any) {
    const notificationsRef = collection(this.firestore, 'notifications');
    return addDoc(notificationsRef, data);
  }

  markAsRead(id: string) {
    const notificationRef = doc(this.firestore, `notifications/${id}`);
    return updateDoc(notificationRef, { read: true });
  }
}
