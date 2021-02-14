import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  public repoUrl = 'https://github.com/mathisGarberg/angular-folder-structure';

  navItems = [
    { link: '/dashboard/home', title: 'Home' },
    { link: '/about', title: 'About' },
    { link: '/contact', title: 'Contact' }
  ];
}
