import { Component, ViewChild, ViewChildren, AfterViewInit, EventEmitter, Input, OnInit, Output, ElementRef } from '@angular/core';
import { Todo } from 'src/app/todo';
import { AddTodoComponent } from '../add-todo/add-todo.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  title!: string;
  desc!: string;
  @Output() todoEdit: EventEmitter<Todo> = new EventEmitter();
  @ViewChild(AddTodoComponent, { read: ElementRef })
  private child!: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  // onSubmit() {
  //    const todo = {
  //      sno: 8,
  //      title: this.title,
  //      desc: this.desc,
  //      active: true
  //    }
  //    this.todoEdit.emit(todo);
  //  }
}
