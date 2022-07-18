import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
// import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { MatModule } from '../mat/mat.module';
import { TodoItemComponent } from './list/todo-item/todo-item.component';
import { AddTodoComponent } from './list/add-todo/add-todo.component';
import { EditComponent } from './list/edit/edit.component';


@NgModule({
  declarations: [

    ListComponent,
    TodoItemComponent,
    AddTodoComponent,
    EditComponent,

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatModule
  ]
})
export class UserModule { }
