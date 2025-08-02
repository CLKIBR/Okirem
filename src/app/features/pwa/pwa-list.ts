// pwa-list.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pwa-list',
  templateUrl: './pwa-list.html',
  styleUrls: ['./pwa-list.scss'],
  imports: [CommonModule]
})
export class PwaListComponent {
  // PWA özellikleri listesi
  features: { name: string; description: string }[] = [];

  constructor() {
    // PWA özellikleri burada alınacak
  }
}
