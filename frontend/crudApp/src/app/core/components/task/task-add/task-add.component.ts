import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { Task } from 'src/app/interface/Task.model';
import { Router } from '@angular/router';
import { BaseFormTaskService, } from 'src/app/utilities/base-form.task.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.scss']
})
export class TaskAddComponent implements OnInit {


  task: Task[] = []

  constructor(
    private router: Router,
    private taskService: TasksService,

    public baseForm: BaseFormTaskService
  ) { }

  ngOnInit(): void {
  }

  addTask() {
    const task = this.baseForm.baseForm.value
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Task added',
      showConfirmButton: false,
      timer: 1500
    })
    this.taskService.addTask(task).subscribe((res: any) => {
          res.body
          this.router.navigate(['/tasks'])
      console.log(res.body)
  })
  // this.taskService.addTask(this.baseForm.baseForm.value)
  //   .subscribe(
  //     (res:any) => {
  //       console.log(res);
  //       this.router.navigate(['/tasks']);
  //     }
  //   )

  }
}


