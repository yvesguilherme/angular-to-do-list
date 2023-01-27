import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MockComponents } from 'ng-mocks';

import { TodoListComponent } from './todo-list.component';
import { TaskList } from '../../model/task-list';
import { TodoInputAddItemsComponent } from '../todo-input-add-items/todo-input-add-items.component';
import { TodoButtonDeleteAllComponent } from '../todo-button-delete-all/todo-button-delete-all.component';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TodoListComponent,
        MockComponents(TodoInputAddItemsComponent, TodoButtonDeleteAllComponent),
      ],
      imports: [FormsModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the TodoListComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should contain object keys', () => {
    const mockObject: TaskList = { task: 'My new task...', checked: true };
    expect(Object.keys(mockObject)).toContain('task');
    expect(Object.keys(mockObject)).toContain('checked');
  });

  it('should remove an item from the array of tasks', () => {
    component.deleteItemTaskList(1);
    expect(component.taskList.length).toBeLessThan(2);
  });

  it('should generate a confirm dialog with the proper acronym and remove all items from the array of tasks', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    component.deleteAllTaskList();
    expect(window.confirm).toHaveBeenCalledWith('Do you really want to delete everything?');
    expect(component.taskList.length).toBe(0);
  });

  it('should generate a confirm dialog with the proper acronym and not remove all items from the array of tasks', () => {
    component.taskList = [{ task: 'My new task...', checked: true }];
    spyOn(window, 'confirm').and.returnValue(false);
    component.deleteAllTaskList();
    expect(window.confirm).toHaveBeenCalledWith('Do you really want to delete everything?');
    expect(component.taskList.length).toBe(1);
  });

  it('should receive a task string and add to taskList', () => {
    component.setEmitTaskList('test');
    expect(component.taskList).toContain({ task: 'test', checked: false });
    expect(component.taskList.length).toBe(1);
  });

  it('should call ngDoCheck and the task \'123\' should be in the last position in the taskList', () => {
    component.taskList = [
      { task: '123', checked: false },
      { task: '321', checked: false }
    ];
    component.taskList[0].checked = true;
    spyOn(component, 'ngDoCheck').and.callThrough();
    component.ngDoCheck();
    component['sortTaskList']();
    expect(component.ngDoCheck).toHaveBeenCalled();
    expect(component.taskList.findIndex(t => t.task === '123')).toBe(1);
  });

  it('should generate a confirm dialog when the task name is empty and if true remove the item from the array of tasks', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    component.taskList = [{ task: '123', checked: false }];
    component.validationInput('', 0);
    expect(window.confirm).toHaveBeenCalledWith('Task is empty, do you want to delete it?');
    expect(component.taskList.length).toBe(0);
  });

  it('should generate a confirm dialog when the task name is empty and if false don\'t remove the item from the array of tasks', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    component.taskList = [{ task: '123', checked: false }];
    component.validationInput('', 0);
    expect(window.confirm).toHaveBeenCalledWith('Task is empty, do you want to delete it?');
    expect(component.taskList.length).toBe(1);
  });

  /** UI TESTS... */

  it('renders an independent app-todo-input-add-items', () => {
    const component = findComponent(fixture, 'app-todo-input-add-items');
    expect(component).toBeTruthy();
  });
});

function findComponent<T>(fixture: ComponentFixture<T>, selector: string): DebugElement {
  return fixture.debugElement.query(By.css(selector));
}