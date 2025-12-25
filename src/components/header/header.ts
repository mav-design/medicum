import { SidebarService } from './../../services/sidebar/sidebar-service';
import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  imports: [MatIconModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  SidebarService = inject(SidebarService);
}
