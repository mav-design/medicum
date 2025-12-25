import { SidebarService } from './../../services/sidebar/sidebar-service';
import { Component, computed, inject, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { ActivatedRoute, Event, Router, RouterLink, RouterLinkActive } from '@angular/router';
type Link = {
  href: string;
  title: string;
};
@Component({
  selector: 'app-header',
  imports: [MatIconModule, RouterLink, MatTabsModule, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  SidebarService = inject(SidebarService);
  router = inject(Router);

  activeLink = signal('');

  links: Link[] = [
    { href: 'categories', title: 'Категории' },
    { href: 'threads', title: 'Темы' },
  ];
}
