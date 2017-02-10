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
var router_1 = require('@angular/router');
var platform_browser_1 = require('@angular/platform-browser');
var todo_service_1 = require('./todo.service');
var TodoEditComponent = (function () {
    function TodoEditComponent(_todoService, titleService, _route, _router) {
        this._todoService = _todoService;
        this.titleService = titleService;
        this._route = _route;
        this._router = _router;
        this.titleService.setTitle("Edit Todo Item");
    }
    TodoEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this._route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.getItem(id);
        });
    };
    TodoEditComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    TodoEditComponent.prototype.getItem = function (id) {
        var _this = this;
        //Object.assign clone and decouple todoModel from the ArrayList
        this._todoService.getTodoItem(id).subscribe(function (item) { return _this.todoModel = Object.assign({}, item); }, function (error) { return _this.Message = error; });
    };
    TodoEditComponent.prototype.EditItem = function () {
        this.todoModel.description = this.todoModel.description.trim();
        if (!this.todoModel.description) {
            this.Message = "Description must not be blank.";
            this.MessageType = 2;
            return;
        }
        console.log('valid: update now.');
        var result = this._todoService.updateTodo(this.todoModel);
        if (result > 0) {
            this.Message = "An Item has been updated";
            this.MessageType = 1;
        }
        else {
            this.Message = "Error occured!  Try again.";
            this.MessageType = 2;
        }
    };
    TodoEditComponent.prototype.onBack = function () {
        this._router.navigate(['/todo']);
    };
    TodoEditComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: "todo-edit.component.html"
        }), 
        __metadata('design:paramtypes', [todo_service_1.TodoService, platform_browser_1.Title, router_1.ActivatedRoute, router_1.Router])
    ], TodoEditComponent);
    return TodoEditComponent;
}());
exports.TodoEditComponent = TodoEditComponent;
//# sourceMappingURL=todo-edit.component.js.map