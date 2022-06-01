import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-completed-tasks',
  templateUrl: './completed-tasks.component.html',
  styleUrls: ['./completed-tasks.component.css']
})
export class CompletedTasksComponent implements OnInit {

  @Input() completedtaskList: { id: number, task: string }[] = [];
  @Output() pendingTasksList = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  markAsPending(id) {
    this.pendingTasksList.emit(id);
  }

}
