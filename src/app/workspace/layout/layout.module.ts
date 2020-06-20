import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPONENTS } from './index';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { MatTreeModule } from '@angular/material/tree';

@NgModule({
  declarations: [
    COMPONENTS,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    RouterModule,
    MatTreeModule
  ]
})
export class LayoutModule { }
