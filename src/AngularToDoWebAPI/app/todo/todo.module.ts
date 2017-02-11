import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from "../shared/shared.module";

import { TodoListComponent } from './todo-list.component';
import { TodoAddComponent } from './todo-add.component';
import { TodoEditComponent } from './todo-edit.component';

import { TodoService } from './todo.service';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: 'todo/add', component: TodoAddComponent },
            { path: 'todo/:id', component: TodoEditComponent }
        ])
    ],
    declarations: [
        TodoAddComponent,
        TodoEditComponent
    ],
    providers: [
        TodoService
    ]
})
export class TodoModule { }