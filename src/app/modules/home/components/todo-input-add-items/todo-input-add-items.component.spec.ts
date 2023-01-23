import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoInputAddItemsComponent } from './todo-input-add-items.component';

describe('TodoInputAddItemsComponent', () => {
  let component: TodoInputAddItemsComponent;
  let fixture: ComponentFixture<TodoInputAddItemsComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoInputAddItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoInputAddItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('should create the TodoInputAddItemsComponent', () => {
    expect(component).toBeTruthy();
  });

  it(`should return one 'input' of type text`, () => {
    expect(compiled.querySelectorAll('input').length).toBe(1);
    expect(compiled.querySelector('input')?.type).toEqual('text');
  });
});
