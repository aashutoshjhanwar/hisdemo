import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout.component';

 export const ADMIN_LAYOUT_ROUTES: Routes =[
    {
        path: '',
        component: AdminLayoutComponent,
        children: [
          {
            path: '',
            redirectTo: '/home',
            pathMatch: 'full',
          },
          {
            path: 'home',
            loadChildren: () =>
              import('../features/home/home-routing.module').then((m) => m.Home_Routes),
          },
         
        ],
      },
    ]