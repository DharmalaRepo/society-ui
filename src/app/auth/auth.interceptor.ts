// src/app/auth/auth.interceptor.ts
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // 👇 Replace with your actual values or retrieve from secure storage
    const username = 'admin';
    const password = 'admin123';
    const apiKey = 'dharmala';

    const basicAuth = 'Basic ' + btoa(`${username}:${password}`); // Base64 encode

    const cloned = req.clone({
      setHeaders: {
        Authorization: basicAuth,
        'X-API-KEY': apiKey
      }
    });

    return next.handle(cloned);
  }
}
