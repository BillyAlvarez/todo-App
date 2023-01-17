import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ReactiveFormsModule } from '@angular/forms';

import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoPageComponent } from './todo-page/todo-page.component';



@NgModule({
  declarations: [
    TodoAddComponent,
    TodoFooterComponent,
    TodoItemComponent,
    TodoListComponent,
    TodoPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreDevtoolsModule
  ],
  exports:[
TodoPageComponent
  ]
})
export class TodoModule { }
