import { Component, OnInit } from '@angular/core';
import { Task } from '../../../modules/task'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  tasks: Task[] = [];

  inputTask: string = "";

  constructor() { }

  ngOnInit(): void {
    this.tasks = [
      {
        content: 'First task',
        completed: false
      },
      {
        content: 'Second task',
        completed: false
      }
    ]
  }

  taskCompleted (index: number) {
    this.tasks.map((task, i) => {
      if (i == index) task.completed = !task.completed

      return task;
    })
  }

  deleteTask (index: number) {
    this.tasks = this.tasks.filter((task, i) => i !== index)
  }

  addTask () {
    if (this.inputTask !== "")
    this.tasks.push({
      content: this.inputTask,
      completed: false,
    })
    this.inputTask = ''
  }

}
