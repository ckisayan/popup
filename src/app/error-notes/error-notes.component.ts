import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotesFriendlyUiBroadcaster } from '../services/notesFriendlyUiBroadcaster';

@Component({
  selector: 'app-error-notes',
  templateUrl: './error-notes.component.html',
  styleUrls: ['./error-notes.component.css']
})
export class ErrorNotesComponent implements OnInit {

  instructionid = '0';
  message = '';
  constructor(private route: ActivatedRoute, private bs: NotesFriendlyUiBroadcaster,
    private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {

    // this.route.params.subscribe(
    //   (data) =>  {
    //     this.instructionid = data['id'];
    //   }
    // );
    this.bs.channel.onmessage = event => {
      this.message = event.data;
      this.changeDetectorRef.detectChanges();
    };
    this.instructionid = this.route.snapshot.params['id'];


  }

}
