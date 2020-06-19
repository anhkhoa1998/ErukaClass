import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPONENTS } from './components';
import { CONTAINERS } from './containers';
import { AuthRoutingModule } from './auth-routing.module';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthService } from './services';
import { AuthGuard } from './guard';
import { AuthInterceptor } from './interceptors/auth.interceptor';


@NgModule({
  declarations: [
    COMPONENTS,
    CONTAINERS,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    AuthService,
    AuthGuard,
  ]
})
export class AuthModule { }
