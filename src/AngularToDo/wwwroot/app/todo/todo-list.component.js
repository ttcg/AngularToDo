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
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var todo_service_1 = require('./todo.service');
var TodoListComponent = (function () {
    function TodoListComponent(_todoService, titleService, router) {
        this._todoService = _todoService;
        this.titleService = titleService;
        this.router = router;
        this.titleService.setTitle("Todo Lists");
    }
    TodoListComponent.prototype.ngOnInit = function () {
        this.getTodoItems();
    };
    TodoListComponent.prototype.getTodoItems = function () {
        var _this = this;
        this._todoService.getTodoItems()
            .subscribe(function (todos) { return _this.todoItems = todos; });
    };
    TodoListComponent.prototype.SelectTodoItem = function (model) {
        console.log(model);
        this.selectedItem = model;
    };
    TodoListComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/todo', this.selectedItem.todoId]);
    };
    TodoListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: "todo-list.component.html"
        }), 
        __metadata('design:paramtypes', [todo_service_1.TodoService, platform_browser_1.Title, router_1.Router])
    ], TodoListComponent);
    return TodoListComponent;
}());
exports.TodoListComponent = TodoListComponent;
//# sourceMappingURL=todo-list.component.js.map