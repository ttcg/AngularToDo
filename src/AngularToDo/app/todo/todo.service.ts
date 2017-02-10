import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { Itodo } from './todo'

const TodoItems: Itodo[] = [
    { todoId: 11, description: 'Silencer' },
    { todoId: 12, description: 'Centaur Warrunner' },
    { todoId: 13, description: 'Lay Phyu' },
    { todoId: 14, description: 'Myo Gyi' },
    { todoId: 15, description: 'Swe Mon' }
]

@Injectable()
export class TodoService {

    getTodoItems(): Observable<Itodo[]> {
        return Observable.of(TodoItems);
    }    

    getTodoItem(id: number): Observable<Itodo> {
        return this.getTodoItems()
            .map((items: Itodo[]) => items.find(p => p.todoId === id));
    }

    addNewTodo(model: Itodo): number {
        return TodoItems.push(model); // return new length of an array
    }

    updateTodo(model: Itodo) : number {
        let idx = TodoItems.indexOf(TodoItems.filter(f => f.todoId == model.todoId)[0]);        
        return TodoItems.splice(idx, 1, model).length; // return the count of affected item
    }

    deleteTodo(id: number) {
        let idx = TodoItems.indexOf(TodoItems.filter(f => f.todoId == id)[0]); 
        return TodoItems.splice(idx, 1);
    }
}