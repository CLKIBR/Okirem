import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading-message',
  imports: [CommonModule],
  template: `<div *ngIf="loading" class="loading" role="status">{{ text || 'Yükleniyor...' }}</div>`,
  styleUrl: './loading-message.scss'
})
export class LoadingMessageComponent {
  @Input() loading: boolean = false;
  @Input() text: string | null = null;
}
