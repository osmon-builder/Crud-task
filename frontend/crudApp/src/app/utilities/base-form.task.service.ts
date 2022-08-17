import {  Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../interface/Task.model';


@Injectable()

  export class BaseFormTaskService {

    public baseForm: FormGroup;
    public $task = new BehaviorSubject<Task>(new Task);


    public changeItemData(task: Task): void {
      this.$task.next(task);
    }

    constructor(private fb: FormBuilder) {
        this.baseForm = this.fb.group({
            id: ['',],
            title: ['', Validators.required],
            description: ['', Validators.required], 
        });
      }
      public pathFormData(task : Task): void {
        return this.baseForm.patchValue({ ...task });
      }
    
      resetForm(task : Task) {
        this.baseForm.reset(task);
      }
  }