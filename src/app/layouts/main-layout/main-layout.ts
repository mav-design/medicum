import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SidebarService } from '../../../services/sidebar/sidebar-service';
import { Header } from '../../../components/header/header';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, MatSidenavModule, MatButtonModule, MatIconModule, Header],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout implements AfterViewInit {
  @ViewChild('sidenav')
  sidenav!: MatSidenav;
  sideNavService = inject(SidebarService);

  ngAfterViewInit(): void {
    this.sideNavService.initializeSidebar(this.sidenav);
  }
}
