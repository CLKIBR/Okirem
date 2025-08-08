import { Component } from '@angular/core';
import { IconModule } from '@coreui/icons-angular';
import { ColComponent, ContainerComponent, RowComponent } from "@coreui/angular";


@Component({
  selector: 'app-register-welcome',
  imports: [IconModule, ContainerComponent, RowComponent, ColComponent],
  templateUrl: './register-welcome.html',
  styleUrl: './register-welcome.scss'
})
export class RegisterWelcome {

}
