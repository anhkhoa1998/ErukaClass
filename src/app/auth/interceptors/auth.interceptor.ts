import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { environment } from '../../../environments/environment';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  urls = [
    `${ environment.apiUrl }/auth`,
  ];
  constructor(private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('token');

    if (!this.urls.includes(request.url)) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${ token }`
        }
      });
    }

    return next.handle(request).pipe(
      catchError(err => {

        if (err.status === 401) {
          localStorage.removeItem('token');
          //this.router.navigate([ '' ]);
        }

        return throwError(err);
      }));
  }
}
