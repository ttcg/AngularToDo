import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { Itodo } from './todo'
import { TodoService } from './todo.service';

@Component({
    moduleId: module.id,
    templateUrl: "todo-list.component.html",
    styles: [".pointer { cursor: pointer;}"]
})
export class TodoListComponent implements OnInit {

    selectedItem: Itodo;
    todoItems: Itodo[];    

    constructor(
        private _todoService: TodoService,
        private titleService: Title,
        private router: Router) {
        this.titleService.setTitle("Todo Lists")
    }

    ngOnInit(): void {
        this.getTodoItems();
    }

    getTodoItems(): void {
        this._todoService.getTodoItems()
            .subscribe(todos => this.todoItems = todos);
    }

    SelectTodoItem(model: Itodo) : void {
        console.log(model);
        this.selectedItem = model;
    }

    gotoDetail(): void {
        this.router.navigate(['/todo', this.selectedItem.todoId]);
    }

    deleteItem(id: number): void {
        var c = confirm("Are you sure you want to remove this item?"); 
        if (c) {
            this._todoService.deleteTodo(id);
        }
    }
}