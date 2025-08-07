import { LocalStorageService } from '../../../../../services/concretes/local-storage.service';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../../services/concretes/auth.service';
import { UserService } from '../../../../../services/concretes/user.service';
import { GetByIdUserResponse } from '../../../../../models/responses/users/get-by-id-user-response';
import { ToastrModule } from 'ngx-toastr';
import {
  ColComponent,
  ContainerComponent,
  RowComponent,
} from '@coreui/angular';
import { IconDirective } from '@coreui/icons-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login-welcome.html',
  styleUrls: ['./login-welcome.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, ToastrModule,IconDirective],
})
export class LoginWelcome {
  showLoginForm = false;
  userInfo: GetByIdUserResponse | null = null;
  welcomeMessage: string = 'Hoş Geldin';

  get isLoggedIn(): boolean {
    return this.authService.loggedIn();
  }

  get userName(): string {
    if (this.userInfo) {
      return `${this.userInfo.firstName} ${this.userInfo.lastName}`;
    }
    return '';
  }

  get userProfileImage(): string {
    if (this.userInfo && this.userInfo.profileImageUrl) {
      return this.userInfo.profileImageUrl;
    }
    return '/assets/images/profile_default.png';
  }
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    const loggedOut = this.localStorageService.get('loggedOut');
    if (loggedOut === 'true' && !this.authService.loggedIn()) {
      this.welcomeMessage = 'Tekrar giriş yapmak ister misiniz?';
      this.localStorageService.remove('loggedOut');
    } else if (this.authService.loggedIn()) {
      // Eğer token var ama kullanıcı panelden oturum kapat ile yönlendirildiyse
      this.welcomeMessage = 'Tekrar Girişin İçin Beklemedeyim';
    } else {
      this.welcomeMessage = 'Hoşgeldiniz, iyi çalışmalar!';
    }

    // Token varsa karşılama alanı göster, form gizli
    this.showLoginForm = !this.authService.loggedIn();
    if (!this.showLoginForm) {
      const userId = this.authService.getCurrentUserId();
      this.userService.getByUserId(userId).subscribe({
        next: (user) => {
          this.userInfo = user;
        },
        error: () => {
          this.userInfo = null;
        },
      });
    }
  }

  onSwitchAccount() {
    this.localStorageService.remove('token');
    this.localStorageService.set('loggedOut', 'true');
    this.showLoginForm = true;
    this.welcomeMessage = 'Tekrar giriş yapmak ister misiniz?';
  }

  onProfileClick() {
    if (!this.userInfo || !this.userInfo.position) return;
    const pos = this.userInfo.position.toLowerCase();
    switch (pos) {
      case 'student':
        this.router.navigate(['/student']);
        break;
      case 'teacher':
        this.router.navigate(['/teacher']);
        break;
      case 'parent':
        this.router.navigate(['/parent']);
        break;
      case 'admin':
        this.router.navigate(['/admin']);
        break;
      default:
        this.router.navigate(['/']);
    }
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.error = null;
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    this.authService.login(this.loginForm.value).subscribe({
      next: () => {
        this.loading = false;
        this.localStorageService.remove('loggedOut');
        // Token'daki tüm claim anahtar ve değerlerini konsola yazdır
        const decoded = this.authService.getDecodedToken();
        console.log('JWT decoded claims:', decoded);
        const position = this.authService.getUserPosition();
        console.log('Kullanıcı pozisyonu (token):', position);
        switch (position) {
          case 'Student':
            this.router.navigate(['/student']);
            break;
          case 'Teacher':
            this.router.navigate(['/teacher']);
            break;
          case 'Parent':
            this.router.navigate(['/parent']);
            break;
          case 'Admin':
            this.router.navigate(['/admin']);
            break;
          default:
            this.router.navigate(['/']);
        }
      },
      error: (err) => {
        this.loading = false;
        this.error = err?.error?.message || 'Giriş başarısız.';
      },
    });
  }
}
