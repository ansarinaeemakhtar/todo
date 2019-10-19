import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  updateid: number;
  task: any;
  taskList: any = [];

  constructor() { }

  ngOnInit() { }

  addTask () {
    if (this.updateid !== undefined) {
      for (let i = 0; i < this.taskList.length; i++)
        if (this.taskList[i].id == this.updateid) this.taskList[i].task = this.task;
    }
    else
      this.taskList.push({"id": this.taskList.length+1, "task": this.task});
    this.task = "";
  }

  updateTask (id) {
    if (this.taskList.length === id-1 ) {
      this.task = this.taskList[id];
      this.updateid = this.taskList[id];
    }
    else {
      this.task = this.taskList[id-1].task;
      this.updateid = this.taskList[id-1].id;
    }
  }

  deleteTask (id) {
    this.taskList.length === id-1 ? this.taskList.pop() : this.taskList.splice(id-1, 1);
  }

}
