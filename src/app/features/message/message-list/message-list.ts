import { Component, signal, inject } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// MessageService ileride eklenecek

@Component({
  selector: 'app-message-list',
  imports: [CommonModule, DatePipe,FormsModule,BrowserModule],
  templateUrl: './message-list.html',
  styleUrl: './message-list.scss'
})
export class MessageListComponent {
  messages = signal<any[]>([
    { id: 'msg1', from: 'Öğretmen', to: 'Öğrenci', text: 'Merhaba!', date: new Date() },
    { id: 'msg2', from: 'Öğrenci', to: 'Öğretmen', text: 'Teşekkürler!', date: new Date() }
  ]);
  error = signal<string | null>(null);
  messageText = signal<string>('');

  // İleride servis entegrasyonu ile güncellenecek
  async sendMessage(msg: any) {
    this.messages.set([...this.messages(), { ...msg, id: 'msg' + (this.messages().length + 1), date: new Date() }]);
    this.messageText.set('');
  }
}
