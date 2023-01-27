import { Component, DoCheck } from '@angular/core';

import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {
  public taskList: TaskList[] = [];

  ngDoCheck(): void {
    this.sortTaskList();
  }

  private sortTaskList(): void {
    this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
  }

  public deleteItemTaskList(index: number): void {
    this.taskList.splice(index, 1);
  }

  public deleteAllTaskList(): void {
    const confirm = window.confirm(`Do you really want to delete everything?`);

    if (confirm) {
      this.taskList = [];
    }
  }

  public setEmitTaskList(task: string): void {
    this.taskList.push({ task: task, checked: false });
  }

  public validationInput(event: string, index: number): void {
    if (!event.length) {
      const confirm = window.confirm('Task is empty, do you want to delete it?');

      if (confirm) {
        this.deleteItemTaskList(index);
      }
    }
  }
}
