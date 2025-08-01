import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-error-message',
  imports: [CommonModule],
  template: `<div *ngIf="message" class="error" role="alert">{{ message }}</div>`,
  styleUrl: './error-message.scss'
})
export class ErrorMessageComponent {
  @Input() message: string | null = null;
}
