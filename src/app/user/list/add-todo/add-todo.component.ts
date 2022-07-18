import { Component, OnInit, EventEmitter, Output, Input, ViewChild } from '@angular/core';
//import { ConsoleReporter } from 'jasmine';
import { Todo } from 'src/app/todo';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  title!: string;
  desc!: string;
  savebutt: any;
  addbutt: any;
  oldtodo: any;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter(); todoEdit: EventEmitter<Todo> = new EventEmitter();
  //@ViewChild
  constructor(private todocomp: TodoItemComponent) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.oldtodo = this.todocomp.addtoClick();
    const todo = {
      sno: 8,
      title: this.title,
      // desc: this.desc,
      active: true
    }
    this.todoAdd.emit(todo);
    this.title = '';
  }
}
