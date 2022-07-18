import { Component, ViewChild, ViewChildren, AfterViewInit, EventEmitter, Input, OnInit, Output, ElementRef, Injectable } from '@angular/core';
import { Todo } from 'src/app/todo';
import { AddTodoComponent } from '../add-todo/add-todo.component';
import { ListComponent } from '../list.component';

//export var holdtodo={"desc":"","title":""};
export var holdtodo = {};
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
@Injectable({
  providedIn: "root"
})

export class TodoItemComponent implements OnInit {
  @ViewChild('deletebuttn') myDiv!: ElementRef;
  title: any;
  desc: any;
  desc1: any;
  title1: any;
  constructor() { }
  public holdtodo: any;
  @Input()
  todo!: Todo;
  savebutt: any;
  addbutt: any;

  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter(); todoEdit: EventEmitter<Todo> = new EventEmitter();
  @ViewChild(AddTodoComponent, { read: ElementRef })
  private child!: ElementRef;

  ngOnInit(): void {
    //console.log(this.myDiv.nativeElement.innerHTML);
  }
  onClick(todo: Todo) {
    this.todoDelete.emit(todo);
    console.log("onclick has been tiggerd")
  }

  onClickEdit(todo: Todo) {
    this.todoEdit.emit(todo);
    //holdtodo.title = todo.title;
    //holdtodo.desc = todo.desc;
    holdtodo = todo;
    this.title1 = <HTMLElement>document.getElementById("title");
    this.desc1 = <HTMLElement>document.getElementById("desc");
    this.title1.value = todo.title;
    // this.desc1.value = todo.desc;

    this.savebutt = <HTMLElement>document.getElementById("savebutt");
    this.addbutt = <HTMLElement>document.getElementById("addbutt");
    this.savebutt.style = "display:show";
    this.addbutt.style = "display:none";
    /*this.savebutt.onClick = function(){
      console.log("Hello")
    };*/


    //let element = this.child.nativeElement;
    //console.log("Child component", element, "width: " + element.offsetWidth, "height: " + element.offsetHeight);
    //AddTodoComponent

    console.log("onclick has been tiggerd")
  }

  addtoClick() {
    return holdtodo;
  }
}
