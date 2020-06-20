import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassListPageComponent } from './containers/class-list-page/class-list-page.component';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: 'class',
        component: ClassListPageComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkspaceRoutingModule {
}
