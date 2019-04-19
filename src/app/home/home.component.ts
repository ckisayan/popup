import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NotesFriendlyUiBroadcaster } from '../services/notesFriendlyUiBroadcaster';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  messageFromBroadCast = '';

  constructor(public bs: NotesFriendlyUiBroadcaster, private changeDetectorRef: ChangeDetectorRef) {  }

  ngOnInit() {
    localStorage.setItem('ErrorNotes', 'message to child1');
    sessionStorage.setItem('ErrorNotes', 'message to child2');
    this.bs.channel.onmessage = event => {
      this.messageFromBroadCast = event.data;
      this.changeDetectorRef.detectChanges();
    };
  }
  sendMessageToErrorNotes(event) {
    this.bs.channel.postMessage(event.target.value);
  }
}
