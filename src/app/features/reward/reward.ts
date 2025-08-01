import { Injectable } from '@angular/core';
import { Firestore, collection, getDocs, doc, getDoc, addDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class RewardService {
  constructor(private firestore: Firestore) {}

  getRewards() {
    const rewardsRef = collection(this.firestore, 'rewards');
    return getDocs(rewardsRef);
  }

  getReward(id: string) {
    const rewardRef = doc(this.firestore, `rewards/${id}`);
    return getDoc(rewardRef);
  }

  earnReward(data: any) {
    const rewardsRef = collection(this.firestore, 'rewardHistory');
    return addDoc(rewardsRef, data);
  }

  getRewardHistory(uid: string) {
    const historyRef = collection(this.firestore, 'rewardHistory');
    // Filtreleme Firestore sorgusu ile yapılabilir
    return getDocs(historyRef);
  }
}
