import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/interface/Task.model';
import { TasksService } from 'src/app/services/tasks.service';
import { BaseFormTaskService } from 'src/app/utilities/base-form.task.service';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent implements OnInit {

  task : Task[] = [];
  public editTask: any; 

  constructor(

    private taskService : TasksService,
    private router: Router,
    public baseForm: BaseFormTaskService,
    
  ) {
    this.editTask = this.router.url.includes('tasks._id')
  }
   

  ngOnInit(): void {   
   this.baseForm.$task.subscribe(res => {
      this.baseForm.pathFormData(res)
   });
   console.log(this.task)
  }

 
  


  sendForm() {
    this.taskService.updateTask(this.baseForm.baseForm.value).subscribe((res:any) => {
      console.log(res)
      this.task = res
      this.router.navigate(['/tasks'])
    })
  }
    

}
