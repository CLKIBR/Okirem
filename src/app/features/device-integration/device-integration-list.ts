// device-integration-list.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-device-integration-list',
  templateUrl: './device-integration-list.html',
  styleUrls: ['./device-integration-list.scss'],
  imports: [CommonModule],
  
})
export class DeviceIntegrationListComponent {
  // Donanım entegrasyonları listesi
  devices: { name: string; type: string }[] = [];

  constructor() {
    // Cihaz verileri burada alınacak
  }
}
