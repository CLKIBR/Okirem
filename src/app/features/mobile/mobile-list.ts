// mobile-list.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-list',
  templateUrl: './mobile-list.html',
  styleUrls: ['./mobile-list.scss'],
  imports: [CommonModule]
})
export class MobileListComponent {
  // Mobil özellikler listesi
  features: { name: string; description: string }[] = [];

  constructor() {
    // Mobil özellikler burada alınacak
  }
}
