import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

type HTMLSideBar = MatSidenav | null;

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private sidebar: HTMLSideBar = null;
  initializeSidebar(sidebar: HTMLSideBar) {
    this.sidebar = sidebar;
  }

  openSidebar() {
    if (this.sidebar && !this.sidebar.opened) {
      this.sidebar.open();
    }
  }
  closeSidebar() {
    if (this.sidebar && this.sidebar.opened) {
      this.sidebar.close();
    }
  }
}
