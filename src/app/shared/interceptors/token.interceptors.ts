import { HttpEvent, HttpRequest, HttpInterceptorFn, HttpHandlerFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
 
 
export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  var changedReq = req;
  
  let data =  'true' ?? "";
 
  if (data) {
    let authData: any = JSON.parse(data);
    changedReq = req.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: authData ? 'Bearer ' + authData.accessToken : '',
      },
    });
  }
  return next(changedReq);
};
 