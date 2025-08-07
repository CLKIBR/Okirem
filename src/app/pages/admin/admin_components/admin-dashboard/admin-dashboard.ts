import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/features';
@Component({
  selector: 'app-admin-dashboard',
  imports: [],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.scss'
})
  export class AdminDashboard {
    constructor(public localStorageService: LocalStorageService, public router: Router) {}

  logout() {
    this.localStorageService.remove('token');
    this.localStorageService.set('loggedOut', 'true');
    this.router.navigate(['/login']);
  }
}
