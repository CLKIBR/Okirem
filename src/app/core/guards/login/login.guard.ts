import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { AuthService } from '../../../features/services/concretes/auth.service';

@Injectable({ providedIn: 'root' })
export class LoginGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean | UrlTree {
    // Kullanıcı login mi kontrol et
    if (this.authService.loggedIn()) {
      // Pozisyon kontrolü (admin, student, teacher, parent)
      const position = this.authService.getUserPosition();
      if (['Admin', 'Student', 'Teacher', 'Parent'].includes(position || '')) {
        return true;
      }
    }
    // Değilse login sayfasına yönlendir
    return this.router.createUrlTree(['/login']);
  }
}
