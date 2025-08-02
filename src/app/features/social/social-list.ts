// social-list.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-social-list',
  templateUrl: './social-list.html',
  styleUrls: ['./social-list.scss'],
  imports: [CommonModule]
})
export class SocialListComponent {
  // Sosyal etkileşimler listesi
  interactions: { user: string; action: string }[] = [];

  constructor() {
    // Sosyal veriler burada alınacak
  }
}
