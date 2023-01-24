import { Component } from '@angular/core';

import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  public taskList: TaskList[] = [
    // { task: 'Minha nova task', checked: true },
    // { task: 'Minha nova task 2', checked: false }
  ];

  public deleteItemTaskList(index: number): void {
    this.taskList.splice(index, 1);
  }

  public deleteAllTaskList(): void {
    const confirm = window.confirm(`Você deseja realmente deletar tudo?`);

    if (confirm) {
      this.taskList = [];
    }
  }
}
