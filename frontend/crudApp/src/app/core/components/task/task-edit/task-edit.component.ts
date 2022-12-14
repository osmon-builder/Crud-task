import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/interface/Task.model';
import { TasksService } from 'src/app/services/tasks.service';
import { BaseFormTaskService } from 'src/app/utilities/base-form.task.service';


import Swal from 'sweetalert2'
@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent implements OnInit {
  
  task: any
  
  public _id = this._route.snapshot.paramMap.get('id') as any

  constructor(
    private _route: ActivatedRoute,
    private taskService : TasksService,
    private router: Router,
    public baseForm: BaseFormTaskService,
    
  ) {
   
  }
   

  ngOnInit(): void {   
     
     this.taskService.getTask(this._id).subscribe((res:any) => {
            this.task = res
            this.baseForm.baseForm.patchValue(res)
     })
    }

 
  


  sendForm() {
    const task = this.baseForm.baseForm.value
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Task added',
      showConfirmButton: false,
      timer: 1500
    })
        this.taskService.getTask(this._id).subscribe((res:any) => {
          this.task = res
          console.log(this.task._id)
        this.taskService.updateTask(task, this.task._id ).subscribe((res:any) => {
        res.body = this.baseForm.baseForm.value
        
       })
  
      this.router.navigate(['/tasks'])
    })   
  }

  ngOnDestroy(): void {
    this.baseForm.baseForm.reset()
  }
    

}
