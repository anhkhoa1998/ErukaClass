import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceRoutingModule } from './workspace-routing.module';
import { COMPONENTS } from './components';
import { CONTAINERS } from './containers';
import { MatCardModule } from '@angular/material/card';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [
    COMPONENTS,
    CONTAINERS,
  ],
  imports: [
    CommonModule,
    WorkspaceRoutingModule,
    MatCardModule,
    LayoutModule,
  ]
})
export class WorkspaceModule { }
