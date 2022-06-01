import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pending-tasks',
  templateUrl: './pending-tasks.component.html',
  styleUrls: ['./pending-tasks.component.css']
})
export class PendingTasksComponent implements OnInit {

  constructor() { }

  @Input() tasklist: {id: number, task: string}[] = [];
  @Output() completedTasksList = new EventEmitter();

  ngOnInit(): void {
  }

  markAsCompleted(id) {
    this.completedTasksList.emit(id);
  }

}
