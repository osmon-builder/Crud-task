import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { SinginComponent } from './core/components/singin/singin.component';
import { SingupComponent } from './core/components/singup/singup.component';

import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/singin', pathMatch: 'full' },
  {
    path: 'tasks',
    loadChildren: () => import('./core/components/task/task.module').then(m => m.TaskModule),
    canActivate: [AuthGuard]
  },
 
  {
    path: 'singin',
    component: SinginComponent
  },
  {
    path: 'singup',
    component: SingupComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
