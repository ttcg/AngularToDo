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
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/observable/of');
var TodoItems = [
    { todoId: 11, description: 'Silencer' },
    { todoId: 12, description: 'Centaur Warrunner' },
    { todoId: 13, description: 'Lycanthrope' },
    { todoId: 14, description: 'Sniper' },
    { todoId: 15, description: 'Lone Druid' }
];
var TodoService = (function () {
    function TodoService() {
    }
    TodoService.prototype.getTodoItems = function () {
        return Observable_1.Observable.of(TodoItems);
    };
    TodoService.prototype.getTodoItem = function (id) {
        console.log("getTodo called");
        return this.getTodoItems()
            .map(function (items) { return items.find(function (p) { return p.todoId === id; }); });
    };
    TodoService.prototype.addNewTodo = function (model) {
        return TodoItems.push(model); // return new length of an array
    };
    TodoService.prototype.updateTodo = function (model) {
        var idx = TodoItems.indexOf(TodoItems.filter(function (f) { return f.todoId == model.todoId; })[0]);
        return TodoItems.splice(idx, 1, model).length; // return the count of affected item
    };
    TodoService.prototype.deleteTodo = function (id) {
        var idx = TodoItems.indexOf(TodoItems.filter(function (f) { return f.todoId == id; })[0]);
        return TodoItems.splice(idx, 1);
    };
    TodoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TodoService);
    return TodoService;
}());
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map