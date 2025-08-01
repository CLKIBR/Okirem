import { Injectable } from '@angular/core';
import { Firestore, collection, getDocs, query, orderBy, limit } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class Leaderboard {
  constructor(private firestore: Firestore) {}

  getLeaderboard(top: number = 10) {
    const leaderboardRef = query(collection(this.firestore, 'users'), orderBy('points', 'desc'), limit(top));
    return getDocs(leaderboardRef);
  }
}
