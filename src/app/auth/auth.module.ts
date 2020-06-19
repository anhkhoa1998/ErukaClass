import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPONENTS } from './components';
import { CONTAINERS } from './containers';
import { AuthRoutingModule } from './auth-routing.module';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


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
    MatInputModule
  ]
})
export class AuthModule { }
