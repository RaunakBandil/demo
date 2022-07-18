import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Todo } from 'src/app/todo';
import { TodoItemComponent } from './todo-item/todo-item.component';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  localItem: string | null;
  todos!: Todo[];
  savebutt: any;
  addbutt: any;
  oldtodo: any;
  constructor(private todocomp: TodoItemComponent) {
    this.localItem = localStorage.getItem("todos");
    if (this.localItem == null) {
      this.todos = [];
    } else {

      this.todos = JSON.parse(this.localItem);
    }
  }

  ngOnInit(): void {
  }
  deleteTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1)
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  addTodo(todo: Todo) {
    console.log(todo);
    this.oldtodo = this.todocomp.addtoClick();
    console.log("oldtodo", this.oldtodo);
    this.savebutt = <HTMLElement>document.getElementById("savebutt");
    this.addbutt = <HTMLElement>document.getElementById("addbutt");
    if (todo.title !== '') {
      if (this.savebutt.style.display == "") {
        const index = this.todos.indexOf(this.oldtodo);
        this.todos[index].title = todo.title;
        // this.todos[index].desc = todo.desc;
      }
      else {
        this.todos.push(todo);
      }
    } else {
      alert("Please enter the title ! ")


    }

    localStorage.setItem("todos", JSON.stringify(this.todos));
    this.savebutt.style = "display:none";
    this.addbutt.style = "display:show";
  }
  editTodo(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

}
