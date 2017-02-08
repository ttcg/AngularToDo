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
var todo_service_1 = require('./todo.service');
var TodoAddComponent = (function () {
    function TodoAddComponent(_todoService, titleService) {
        this._todoService = _todoService;
        this.titleService = titleService;
        // initialize as the blank object
        // if you use Class instead of Iterface, no need to do this
        this.todoModel = { todoId: null, description: '' };
        this.titleService.setTitle("Add Todo Item");
    }
    TodoAddComponent.prototype.AddItem = function () {
        this.todoModel.description = this.todoModel.description.trim();
        this.todoModel.todoId = Math.floor(Math.random() * 100); // generate randomID
        if (!this.todoModel.description) {
            return;
        }
        this._todoService.addNewTodo(this.todoModel);
        this.Message = "New Item has been added";
        this.MessageType = 1;
    };
    TodoAddComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: "todo-add.component.html"
        }), 
        __metadata('design:paramtypes', [todo_service_1.TodoService, platform_browser_1.Title])
    ], TodoAddComponent);
    return TodoAddComponent;
}());
exports.TodoAddComponent = TodoAddComponent;
//# sourceMappingURL=todo-add.component.js.map