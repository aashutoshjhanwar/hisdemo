import {
  HttpEvent, 
  HttpRequest,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpErrorResponse,
  HttpClient,
} from '@angular/common/http';
import { catchError, Observable, switchMap, throwError } from 'rxjs'; 
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const errorInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<any>> => {


  const httpClient = inject(HttpClient);
  const router = inject(Router);

  return next(req).pipe(
    catchError((err: HttpErrorResponse) => {
        if (err.status === 401) {
      
        } 
        const error =
          (err.error && err.error.message) ||
          (err.error && err.error.errorMessage) ||
          err.statusText;
        return throwError(() => err.error);
      }),
    );
  } 
