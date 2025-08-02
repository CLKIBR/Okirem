// legal-list.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-legal-list',
  templateUrl: './legal-list.html',
  styleUrls: ['./legal-list.scss'],
  imports: [CommonModule]
})
export class LegalListComponent {
  // Yasal belgeler listesi
  documents: { title: string; description: string }[] = [];

  constructor() {
    // Yasal belgeler burada alınacak
  }
}
