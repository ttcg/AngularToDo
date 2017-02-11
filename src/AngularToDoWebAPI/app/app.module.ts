import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { AppComponent } from "./app.component";
import { PageNotFoundComponent } from "./not-found.component";
import { TodoListComponent } from "./todo/todo-list.component";

import { SharedModule } from "./shared/shared.module";
import { TodoModule } from "./todo/todo.module";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,        
        SharedModule,
        TodoModule,
        RouterModule.forRoot([
            { path: 'home', component: HomeComponent },
            { path: 'todo', component: TodoListComponent },
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: '**', component: PageNotFoundComponent }
        ],
            { useHash: true })
        
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        TodoListComponent,
        PageNotFoundComponent
    ],
    providers: [
        Title
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }