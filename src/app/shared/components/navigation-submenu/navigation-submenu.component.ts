import { Component } from '@angular/core';
import { AppRouterUrls } from '../../../app-routing.config';

@Component({
  selector: 'app-navigation-submenu',
  templateUrl: './navigation-submenu.component.html',
  styleUrls: ['./navigation-submenu.component.scss'],
})
export class NavigationSubmenuComponent {

  appRouterUrls = AppRouterUrls;

  constructor() {}
}
