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
    private sub: Subscription;

    Message: string;
    MessageType: number;

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
        //Object.assign clone and decouple todoModel from the ArrayList
        this._todoService.getTodoItem(id).subscribe(
            item => this.todoModel = Object.assign({}, item), 
            error => this.Message = <any>error);

    }

    EditItem(): void {

        this.todoModel.description = this.todoModel.description.trim();
        if (!this.todoModel.description) {
            this.Message = "Description must not be blank.";
            this.MessageType = 2;
            return;
        }

        console.log('valid: update now.');
        let result = this._todoService.updateTodo(this.todoModel);

        if (result > 0) {
            this.Message = "An Item has been updated";
            this.MessageType = 1;
        }
        else {
            this.Message = "Error occured!  Try again.";
            this.MessageType = 2;
        }
    }

    onBack(): void {
        this._router.navigate(['/todo']);
    }
}