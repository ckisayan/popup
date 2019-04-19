import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotesFriendlyUiBroadcaster } from '../services/notesFriendlyUiBroadcaster';

@Component({
  selector: 'app-error-notes2',
  templateUrl: './error-notes2.component.html',
  styleUrls: ['./error-notes2.component.css']
})
export class ErrorNotes2Component implements OnInit {

  instructionid = '0';
  messageFromBroadCast = '';
  messageFromLocalStorage = '';
  messageFromSessionStorage = '';

  constructor(private route: ActivatedRoute, private bs: NotesFriendlyUiBroadcaster,
    private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {

    // TODO: you might need to subscribe, so data is refreshed.
    this.messageFromLocalStorage = localStorage.getItem('ErrorNotes') + '';
    this.messageFromSessionStorage = sessionStorage.getItem('ErrorNotes') + '';

    this.route.params.subscribe(
      (data) =>  {
        this.instructionid = data['id'];
      }
    );
    this.bs.channel.onmessage = event => {
      this.messageFromBroadCast = event.data;
      this.changeDetectorRef.detectChanges();
    };
  }
  sendMessageToErrorNotes(event) {
    this.bs.channel.postMessage(event.target.value);
  }
}
