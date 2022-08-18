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
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
       this.taskService.deleteTask(task._id).subscribe((res:any) => {
        console.log(res)
        this.task = res
       })
        Swal.fire(
          'Deleted!',
          'Your task has been deleted.',
          'success'
        )
        window.location.reload()
      }
    })

  }

  editTask(task: Task) {
    
    this.router.navigate(['/tasks/edit/' + task._id])

  }

  viewMoreTask(task: Task) {
  

}
}