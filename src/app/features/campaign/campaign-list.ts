// campaign-list.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Campaign {
  name: string;
  description: string;
}

@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.html',
  styleUrls: ['./campaign-list.scss'],
  imports: [CommonModule],
})
export class CampaignListComponent {
  // Kampanya/promosyon listesi için temel yapı
  campaigns = [
    { name: 'Kampanya 1', description: 'Açıklama 1' },
    { name: 'Kampanya 2', description: 'Açıklama 2' },
  ];

  constructor() {
    // Kampanya verileri burada alınacak
  }
}
