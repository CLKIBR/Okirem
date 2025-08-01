import { Injectable } from '@angular/core';
import { getFirestore, collection, getDocs, query, orderBy } from '@angular/fire/firestore';

@Injectable({ providedIn: 'root' })
export class LeaderboardService {
  async getLeaderboard(): Promise<any[]> {
    const db = getFirestore();
    const q = query(collection(db, 'users'), orderBy('points', 'desc'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }
}
