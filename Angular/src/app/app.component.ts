import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModal ,ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'AkashProj';
  closeResult: string;

  constructor() {}

 

}
