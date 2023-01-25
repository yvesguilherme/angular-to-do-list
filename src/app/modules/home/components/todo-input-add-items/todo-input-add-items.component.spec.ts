import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockComponent } from 'ng-mocks';

import { TodoInputAddItemsComponent } from './todo-input-add-items.component';

describe('TodoInputAddItemsComponent', () => {
  let component: TodoInputAddItemsComponent;
  let fixture: ComponentFixture<TodoInputAddItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MockComponent(TodoInputAddItemsComponent) ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoInputAddItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the TodoInputAddItemsComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should emit a value with event emitter', () => {
    const spy = spyOn(component.emitItemTaskList, 'emit');
    component.addItemTaskList = 'test';
    component.submitTaskList();
    expect(spy).toHaveBeenCalledWith('test');
  });

  it('must not issue an event if the value of addItemTaskList is empty', () => {
    const spy = spyOn(component.emitItemTaskList, 'emit');
    component.submitTaskList();
    expect(spy).not.toHaveBeenCalledWith();
  });
});
