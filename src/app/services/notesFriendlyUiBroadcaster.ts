import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesFriendlyUiBroadcaster {
  channel = new BroadcastChannel('test me');
}
