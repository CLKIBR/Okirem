import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  ButtonDirective,
  ColorModeService,
  ContainerComponent,
  DropdownComponent,
  DropdownMenuDirective,
  DropdownToggleDirective,
  HeaderComponent,
  HeaderNavComponent,
  NavLinkDirective,
  TooltipDirective,
} from '@coreui/angular';
import { IconDirective } from '@coreui/icons-angular';

@Component({
  selector: 'home-header',
  imports: [
    ContainerComponent,
    IconDirective,
    HeaderNavComponent,
    NavLinkDirective,
    RouterLink,
    TooltipDirective,
    CommonModule,
    DropdownComponent,
    ButtonDirective,
    DropdownToggleDirective,
    DropdownMenuDirective,
  ],
  templateUrl: './home-header.html',
  styleUrl: './home-header.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeHeader extends HeaderComponent {
  showMobileMenu = false;

  readonly #colorModeService = inject(ColorModeService);
  readonly colorMode = this.#colorModeService.colorMode;

  readonly colorModes = [
    { name: 'light', text: 'Light', icon: 'cilSun' },
    { name: 'dark', text: 'Dark', icon: 'cilMoon' },
  ];

  readonly icons = computed(() => {
    const currentMode = this.colorMode();
    return (
      this.colorModes.find((mode) => mode.name === currentMode)?.icon ??
      'cilSun'
    );
  });

  constructor() {
    super();
  }

  toggleColorMode() {
    const currentIndex = this.colorModes.findIndex(
      (mode) => mode.name === this.colorMode()
    );
    const nextIndex = (currentIndex + 1) % this.colorModes.length;
    const nextMode = this.colorModes[nextIndex].name;
    this.colorMode.set(nextMode);
  }
}
