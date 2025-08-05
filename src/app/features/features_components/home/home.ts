import { Component } from '@angular/core';
import { HomeHeader, HomeFooter, HomeHeroOne } from "./home_Components";

@Component({
  selector: 'app-home',
  imports: [HomeHeader, HomeFooter, HomeHeroOne],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
