import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { Subscription } from 'rxjs/Subscription';

import { Itodo } from './todo'
import { TodoService } from './todo.service';

@Component({
    moduleId: module.id,
    templateUrl: "todo-edit.component.html"
})
export class TodoEditComponent implements OnInit, OnDestroy {
    todoModel: Itodo;
    errorMessage: string;
    private sub: Subscription;

    constructor(private _todoService: TodoService,
        private titleService: Title,
        private _route: ActivatedRoute,
        private _router: Router) {
        this.titleService.setTitle("Edit Todo Item")
    }

    ngOnInit(): void {
        this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getItem(id);
            });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getItem(id: number) {
        this._todoService.getTodoItem(id).subscribe(
            item => this.todoModel = item,
            error => this.errorMessage = <any>error);
    }

    EditItem(): void {
        console.log('in EditItem');
        console.log(this.todoModel.description);

        this.todoModel.description = this.todoModel.description.trim();
        if (!this.todoModel.description) { return; }
        this._todoService.updateTodo(this.todoModel);
    }
}