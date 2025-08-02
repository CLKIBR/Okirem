import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-ai-recommendation',
  templateUrl: './ai-recommendation.html',
  styleUrl: './ai-recommendation.scss',
  imports: [CommonModule],
})
export class AiRecommendationComponent {
  recommendations = signal<any[]>([]);
  error = signal<string | null>(null);
}
