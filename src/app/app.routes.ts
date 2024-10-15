import { Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
    {
    path: '',
    // canActivate: [AuthGuard],
    loadChildren: () => import('./views/admin-layout/admin-layout-routing').then((m) => m.ADMIN_LAYOUT_ROUTES)
},

{
    path: 'error',
    loadChildren:()=> import('./views/error/error-routing').then(m=>m.ERROR_ROUTES)
},
// { path: '**', redirectTo: 'error/404' }
];
