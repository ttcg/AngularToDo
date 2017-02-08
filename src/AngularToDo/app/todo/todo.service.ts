import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { Itodo } from './todo'

const TodoItems: Itodo[] = [
    { todoId: 11, description: 'Mr. Nice' },
    { todoId: 12, description: 'Narco' },
    { todoId: 13, description: 'Bombasto' }
]

@Injectable()
export class TodoService {

    private _serviceURL = 'api/todos.json';

    constructor(private _http: Http) {
    }

    getTodoItems(): Observable<Itodo[]> {
        //return this._http.get(this._serviceURL)

        return Observable.of(TodoItems);

        //return TodoItems.map((items => Itodo[]) => <Itodo[]>items)
        //    .do(data => console.log(JSON.stringify(data)));
    }

    addNewTodo(model: Itodo) : void {        
        TodoItems.push(model);
    }

    getTodoItem(id: number): Observable<Itodo> {
        return this.getTodoItems()
            .map((items: Itodo[]) => items.find(p => p.todoId === id));
    }

    updateTodo(model: Itodo) : void {
        let idx = TodoItems.indexOf(TodoItems.filter(f => f.todoId == model.todoId)[0]);
        console.log(idx);
        TodoItems.splice(idx, 1, model);

    }
}