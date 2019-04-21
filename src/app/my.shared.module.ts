import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorNotes2Component } from './error-notes2/error-notes2.component';
import { Routes, RouterModule } from '@angular/router';
import { ErrorNotesComponent } from './error-notes/error-notes.component';
const appErrorNotesRoutes: Routes = [
    {
        path: 'errorNotes', component: ErrorNotesComponent, children: [
            { path: ':id', component: ErrorNotes2Component }
        ]
    },
];

@NgModule({
    declarations: [
        ErrorNotes2Component,
        ErrorNotesComponent
    ],

    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(appErrorNotesRoutes),
    ]



})

export class MySharedModule { }
