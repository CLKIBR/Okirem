import { Component, inject } from '@angular/core';
import { IconModule } from '@coreui/icons-angular';
import {
  ColComponent,
  ContainerComponent,
  RowComponent,
} from '@coreui/angular';
import { Lagel } from 'src/app/features/features_components/legal/lagel/lagel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-welcome',
  imports: [IconModule, ContainerComponent, RowComponent, ColComponent, Lagel],
  templateUrl: './register-welcome.html',
  styleUrl: './register-welcome.scss',
})
export class RegisterWelcome {
  router = inject(Router);
  readonly roleCards = [
    {
      title: 'Öğrenciyim',
      description: 'Görevleri tamamla, XP topla, seviye atla!',
      icon: 'assets/images/ogrenci.png',
      role: 'student',
      gradient: 'from-indigo-400 via-fuchsia-500 to-pink-500',
      message: 'Hazırsan tıkla ve öğrenmeye başla! 🚀📚'
    },
    {
      title: 'Öğretmenim',
      description: 'Görev ata, takip et, raporla.',
      icon: 'assets/images/ogretmen.png',
      role: 'teacher',
      gradient: 'from-blue-400 via-cyan-500 to-teal-400',
      message: 'Hemen kaydol, öğrencilerinle fark yarat! 👩‍🏫✨'
    },
    {
      title: 'Veliyim',
      description: 'Çocuğunun gelişimini takip et.',
      icon: 'assets/images/veliyim.png',
      role: 'parent',
      gradient: 'from-amber-400 via-orange-400 to-yellow-400',
      message: 'Çocuğunun yolculuğuna katılmak için tıkla! 🧒❤️'
    },
  ];

  selectRole(role: string) {
    this.router.navigate(['/register/wizard'], {
      queryParams: { role },
    });
  }
}
