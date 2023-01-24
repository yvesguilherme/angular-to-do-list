import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';
import { TodoButtonDeleteAllComponent } from '../todo-button-delete-all/todo-button-delete-all.component';
import { TodoInputAddItemsComponent } from '../todo-input-add-items/todo-input-add-items.component';
import { TaskList } from '../../model/task-list';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoListComponent, TodoButtonDeleteAllComponent, TodoInputAddItemsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('should create the TodoListComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should contain object keys', () => {
    const mockObject: TaskList = { task: 'My new task...', checked: true };
    expect(Object.keys(mockObject)).toContain('task');
    expect(Object.keys(mockObject)).toContain('checked');
  });

  /** UI TESTS... */

  it('should create the TodoInputAddItemsComponent', () => {
    const fixture = TestBed.createComponent(TodoInputAddItemsComponent);
    const todoInputAddItemsComponentComponent = fixture.componentInstance;
    expect(todoInputAddItemsComponentComponent).toBeTruthy();
  });

  it('should create the TodoButtonDeleteAllComponent', () => {
    const fixture = TestBed.createComponent(TodoButtonDeleteAllComponent);
    const todoButtonDeleteAllComponent = fixture.componentInstance;
    expect(todoButtonDeleteAllComponent).toBeTruthy();
  });

  it(`should return three childNodes inside li`, () => {
    expect(compiled.children[0].querySelectorAll('li')[0].childNodes.length).toBe(3);
  });

  it(`should render a 'placeholder' attribute with text named 'Enter your task...'`, () => {
    expect(compiled.children[0].querySelectorAll('input')[1].placeholder).toEqual('Enter your task...')
  });

  it(`should return a button with the img inside it`, () => {
    expect(compiled.querySelector('button')?.tagName).toEqual('button'.toUpperCase());
    expect(compiled.querySelector('button')?.children[0].tagName).toEqual('img'.toUpperCase());
  });

  it(`should render an 'alt' attribute with text named 'trash-button'`, () => {
    expect(compiled.querySelector('img')?.alt).toEqual('trash-button');
    expect(compiled.querySelector('img')?.attributes[2].value).toEqual('trash-button');
  });
});
