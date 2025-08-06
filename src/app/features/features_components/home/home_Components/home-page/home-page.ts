import { Component } from '@angular/core';
import { HomeHeader, HomeFooter, HomeHeroOne } from "..";

@Component({
  selector: 'app-home',
  imports: [HomeHeader, HomeFooter, HomeHeroOne],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePage {

}
