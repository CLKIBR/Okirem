import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forum-list',
  templateUrl: './forum-list.html',
  styleUrl: './forum-list.scss',
  imports: [CommonModule]
})
export class ForumListComponent {
  forums = signal<any[]>([]);
  error = signal<string | null>(null);
}
