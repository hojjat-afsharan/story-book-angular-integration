import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../task.model';
import { TaskStateEnum } from 'src/app/task-state.enum';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  tasksInOrder: Task[] = [];

  @Input() loading = false;

  @Output()
  onPinTask = new EventEmitter<Event>();

  @Output()
  onArchiveTask = new EventEmitter<Event>();

  @Input()
  set tasks(arr: Task[]) {
    const initialTasks = [
      ...arr.filter(t => t.state === TaskStateEnum.TASK_PINNED),
      ...arr.filter(t => t.state !== TaskStateEnum.TASK_PINNED)
    ];
    const filteredTasks = initialTasks.filter(t => t.state === TaskStateEnum.TASK_INBOX || t.state === TaskStateEnum.TASK_PINNED);
    this.tasksInOrder = filteredTasks.filter(t => t.state === TaskStateEnum.TASK_INBOX || t.state === TaskStateEnum.TASK_PINNED);
  }

}
