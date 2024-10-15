import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss'],
})
export class HeaderMenuComponent implements OnInit {

  activeMenuUrl: string | null = null;
  
  
  constructor(
    private router: Router,
  ) {
    
  }

  ngOnInit(): void {
   
   
  }

  calculateMenuItemCssClass(url: string): string {
    return this.activeMenuUrl === url ? 'active' : '';
  }

  

  NavigateByUrl(url: string) {
    this.activeMenuUrl = url;
    this.router.navigate([url]);
  }


}

const getCurrentUrl = (pathname: string): string => {
  return pathname.split(/[?#]/)[0];
};

const checkIsActive = (pathname: string, url: string): boolean => {
  const current = getCurrentUrl(pathname);
  if (!current || !url) {
    return false;
  }

  return current === url || current.indexOf(url) > -1;
};
