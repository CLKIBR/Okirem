import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.html',
  styleUrl: './blog-list.scss',
  imports: [CommonModule]
})
export class BlogListComponent {
  blogs = signal<any[]>([]);
  error = signal<string | null>(null);
}
