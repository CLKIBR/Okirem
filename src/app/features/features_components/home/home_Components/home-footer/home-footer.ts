import { Component } from '@angular/core';
import { FooterComponent } from '@coreui/angular';

@Component({
  selector: 'home-footer',
  templateUrl: './home-footer.html',
  styleUrl: './home-footer.scss',
})
export class HomeFooter extends FooterComponent {
  constructor() {
    super();
  }
}
