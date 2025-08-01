import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileShareService } from '../../../core/services/file-share.service';

@Component({
  selector: 'app-file-share-list',
  imports: [CommonModule],
  templateUrl: './file-share-list.html',
  styleUrl: './file-share-list.scss'
})
export class FileShareListComponent {
  files = signal<string[]>([]);
  error = signal<string | null>(null);
  private fileShareService = inject(FileShareService);
  uid = 'demo-user'; // Auth'dan alınacak

  async upload(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      try {
        await this.fileShareService.uploadFile(input.files[0], this.uid);
        this.loadFiles();
        this.error.set(null);
      } catch (err: any) {
        this.error.set('Dosya yüklenemedi: ' + (err?.message || err));
      }
    }
  }

  async loadFiles() {
    try {
      this.files.set(await this.fileShareService.listFiles(this.uid));
      this.error.set(null);
    } catch (err: any) {
      this.error.set('Dosyalar yüklenemedi: ' + (err?.message || err));
    }
  }

  ngOnInit() {
    this.loadFiles();
  }
}
