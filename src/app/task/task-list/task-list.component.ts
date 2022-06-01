import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  taskList: { id: number, task: string }[] = [];
  completedtaskList: { id: number, task: string }[] = [];
  taskForm: FormGroup;

  constructor() {
    this.taskForm = new FormGroup({
      message: new FormControl(null, [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  submitTaks() {
    let id = this.taskList[this.taskList.length - 1] ? this.taskList[this.taskList.length - 1].id + 1 : 0;
    this.taskList.push({
      id: id,
      task: this.taskForm.value.message
    });
    this.taskForm.reset();
  }

  markAsCompleted(id) {
    let filter = this.taskList.find(x => x.id === id);
    this.completedtaskList.push(filter);
    this.taskList = this.taskList.filter(x => x.id !== id);
  }

  markAsPending(id) {
    let filter = this.completedtaskList.find(x => x.id === id);
    this.taskList.push(filter);
    this.completedtaskList = this.completedtaskList.filter(x => x.id !== id);
  }

}
