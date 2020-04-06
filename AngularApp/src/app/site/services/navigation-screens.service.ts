import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationScreensService {
  activeLeftNav: string;
  activeTopNav: string;

  constructor() {
  }

  setTopNav(activeTopNav: string) {
    this.activeTopNav = activeTopNav;
  }

  getTopNav() {
    return this.activeTopNav;
  }

  setLeftNav(activeLeftNav: string) {
    this.activeLeftNav = activeLeftNav;
  }

  getLeftNav() {
    return this.activeLeftNav;
  }
}
