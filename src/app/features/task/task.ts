import { Injectable } from '@angular/core';
import { Firestore, collection, getDocs, doc, getDoc, addDoc, updateDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private firestore: Firestore) {}

  getTasks() {
    const tasksRef = collection(this.firestore, 'tasks');
    return getDocs(tasksRef);
  }

  getTask(id: string) {
    const taskRef = doc(this.firestore, `tasks/${id}`);
    return getDoc(taskRef);
  }

  addTask(data: any) {
    const tasksRef = collection(this.firestore, 'tasks');
    return addDoc(tasksRef, data);
  }

  playTask(id: string, result: any) {
    const taskRef = doc(this.firestore, `tasks/${id}`);
    return updateDoc(taskRef, result);
  }
}
