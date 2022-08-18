import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  Renderer2,
  ViewChild
} from '@angular/core';
import { Task } from 'src/app/interface/Task.model';


@Component({
  selector: 'app-view-more',
  templateUrl: './view-more.component.html',
  styleUrls: ['./view-more.component.scss']
})
export class ViewMoreComponent {

  public show = false;
  @ViewChild('modalBack') modalBack !: ElementRef
  @Input() task: any;
  @Output() closeDialog: EventEmitter<any> = new EventEmitter<any>()




  constructor(
    private renderer: Renderer2
  ) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (this.modalBack && e.target === this.modalBack.nativeElement) {
        this.show = false;
        console.log('clicked')
      }
    })
  }
  public toggleModal() {
    this.show = true;
    console.log(this.show)
  }


  setTask() {
    this.show = false;
    this.closeDialog.emit(this.task)
  }


}
