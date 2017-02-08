import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Itodo } from './todo'
import { TodoService } from './todo.service';

@Component({
    moduleId: module.id,
    templateUrl: "todo-add.component.html"
})
export class TodoAddComponent {
    // initialize as the blank object
    // if you use Class instead of Iterface, no need to do this
    todoModel: Itodo = { todoId: null, description: '' };
    Message: string;
    MessageType: number;

    constructor(private _todoService: TodoService, private titleService: Title) {
        this.titleService.setTitle("Add Todo Item")
    }

    AddItem(): void {

        this.todoModel.description = this.todoModel.description.trim();
        this.todoModel.todoId = Math.floor(Math.random() * 100); // generate randomID
        if (!this.todoModel.description) { return; }

        this._todoService.addNewTodo(this.todoModel);

        this.Message = "New Item has been added";
        this.MessageType = 1;
    }
}