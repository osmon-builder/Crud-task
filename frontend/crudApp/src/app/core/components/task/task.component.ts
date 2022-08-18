import { Component, ComponentRef, OnInit, ViewChild, ViewContainerRef, SimpleChanges, OnChanges } from '@angular/core';
import { Task } from 'src/app/interface/Task.model';
import { TasksService } from 'src/app/services/tasks.service';
import { Router } from '@angular/router';

import Swal from 'sweetalert2'
import { ViewMoreComponent } from './view-more/view-more.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  public task: Task[] = []
  public simpleViewMore: any;
  public viewMore: ComponentRef<ViewMoreComponent> = [] as any;

  filter = '';

  @ViewChild("viewMore", { static:true, read: ViewContainerRef })
  viewMoreContainer: ViewContainerRef = [] as any;



  constructor(
    private taskService: TasksService,
    private router: Router
    ) { }



  ngOnInit(): void {
    this.getTask();
  }

  getTask() {
    this.taskService.getTasks().subscribe( (res: any) => {
      console.log(res)
      this.task = res
    })
  }

 

  deletTask(task: Task) {
    console.log(task._id)
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Task added',
      showConfirmButton: false,
      timer: 1500
    })
       this.taskService.deleteTask(task._id).subscribe((res:any) => {
        console.log(res)
        this.task = res
       })
        window.location.reload()
  }

  editTask(task: Task) {
    
    this.router.navigate(['/tasks/edit/' + task._id])

  }

  viewMoreTask(task: Task) {
    this.viewMore = this.viewMoreContainer.createComponent(this.simpleViewMore);
    this.viewMore.instance.task = task;
  }
}