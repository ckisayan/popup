import { Component } from '@angular/core';
import {DialogService} from 'primeng/api';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DialogService]
})
export class AppComponent {

  constructor(public dialogService: DialogService) { }

}
