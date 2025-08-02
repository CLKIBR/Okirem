import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-content-creator-panel',
  templateUrl: './content-creator-panel.html',
  styleUrl: './content-creator-panel.scss',
  imports: [CommonModule]
})
export class ContentCreatorPanelComponent {
  contents = signal<any[]>([]);
  error = signal<string | null>(null);
}
