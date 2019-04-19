import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DialogModule} from 'primeng/dialog';
import {DynamicDialogModule} from 'primeng/dynamicdialog';

import { AppComponent } from './app.component';
import { ErrorNotesComponent } from './error-notes/error-notes.component';
import { HomeComponent } from './home/home.component';
import { ErrorNotes2Component } from './error-notes2/error-notes2.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'errorNotes', component: ErrorNotesComponent, children: [
    { path: ':id', component: ErrorNotes2Component}
  ]},


];

@NgModule({
  declarations: [
    AppComponent,
    ErrorNotesComponent,
    HomeComponent,
    ErrorNotes2Component,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DialogModule,
    DynamicDialogModule,
    RouterModule.forRoot(appRoutes),

    // ToastModule,
    // TableModule,
    // ButtonModule
    // CommonModule,

  ],
  providers: [],
  entryComponents: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
