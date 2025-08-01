import { Injectable } from '@angular/core';
import { Firestore, doc, getDoc, setDoc, updateDoc } from '@angular/fire/firestore';
import { Auth } from '@angular/fire/auth';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private firestore: Firestore, private auth: Auth) {}

  getProfile(uid: string) {
    const userRef = doc(this.firestore, `users/${uid}`);
    return getDoc(userRef);
  }

  updateProfile(uid: string, data: any) {
    const userRef = doc(this.firestore, `users/${uid}`);
    return updateDoc(userRef, data);
  }

  setRole(uid: string, role: string) {
    const userRef = doc(this.firestore, `users/${uid}`);
    return updateDoc(userRef, { role });
  }
}
