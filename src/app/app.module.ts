import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DialogModule} from 'primeng/dialog';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { MySharedModule } from './my.shared.module';



const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  // {path: 'errorNotes', loadChildren: './my.shared.module#MySharedModule'},
  // {path: 'errorNotes:id', loadChildren: './my.shared.module#MySharedModule'}



];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DialogModule,
    DynamicDialogModule,
    CommonModule,
    MySharedModule,
    RouterModule.forRoot(appRoutes),



  ],
  providers: [],
  entryComponents: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
