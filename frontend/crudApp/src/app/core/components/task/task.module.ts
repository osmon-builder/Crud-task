import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskComponent } from './task.component';
import { RouterModule, Routes } from '@angular/router';
import { TaskAddComponent } from './task-add/task-add.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewMoreComponent } from './view-more/view-more.component';
import { BaseFormTaskService } from 'src/app/utilities/base-form.task.service';
import {MatExpansionModule} from '@angular/material/expansion';




const routes: Routes = [
    { path: "", children: [
        { path: "", component: TaskComponent  },
        { path: "add-task", component: TaskAddComponent },
        { path: "edit/:id", component: TaskEditComponent },
        { path: "view/:id", component: ViewMoreComponent }
    ] },
]

@NgModule({
  declarations: [
    TaskComponent,
    TaskAddComponent,
    TaskEditComponent,
    ViewMoreComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatExpansionModule,
    RouterModule.forChild(routes)
  ],
  providers: [BaseFormTaskService],
  exports: [

  ]
})
export class TaskModule { }
