"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/observable/of');
var TodoItems = [
    { todoId: 11, description: 'Mr. Nice' },
    { todoId: 12, description: 'Narco' },
    { todoId: 13, description: 'Bombasto' }
];
var TodoService = (function () {
    function TodoService(_http) {
        this._http = _http;
        this._serviceURL = 'api/todos.json';
    }
    TodoService.prototype.getTodoItems = function () {
        //return this._http.get(this._serviceURL)
        return Observable_1.Observable.of(TodoItems);
        //return TodoItems.map((items => Itodo[]) => <Itodo[]>items)
        //    .do(data => console.log(JSON.stringify(data)));
    };
    TodoService.prototype.addNewTodo = function (model) {
        TodoItems.push(model);
    };
    TodoService.prototype.getTodoItem = function (id) {
        return this.getTodoItems()
            .map(function (items) { return items.find(function (p) { return p.todoId === id; }); });
    };
    TodoService.prototype.updateTodo = function (model) {
        var idx = TodoItems.indexOf(TodoItems.filter(function (f) { return f.todoId == model.todoId; })[0]);
        console.log(idx);
        TodoItems.splice(idx, 1, model);
    };
    TodoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TodoService);
    return TodoService;
}());
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map