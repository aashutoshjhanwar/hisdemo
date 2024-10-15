import { Routes } from "@angular/router";
import { ErrorComponent } from "./error.component";
import { Error404Component } from "./error-404/error-404.component";
import { Error500Component } from "./error-500/error-500.component";

export const ERROR_ROUTES: Routes = [
    {
      path: '',
      component: ErrorComponent,
      children: [ 
        {
          path: '404',
          component: Error404Component,
          data: { errorCode: 404 },
        },
        {
          path: '500',
          component: Error500Component,
          data: { errorCode: 500 }
        },
        {
          path: '',
          redirectTo: 'login',
          pathMatch: 'full',
        },
        { path: '**', redirectTo: '404', pathMatch: 'full' },
      ],
    },
  ];