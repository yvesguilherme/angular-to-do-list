import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoButtonDeleteAllComponent } from './todo-button-delete-all.component';

describe('TodoButtonDeleteAllComponent', () => {
  let component: TodoButtonDeleteAllComponent;
  let fixture: ComponentFixture<TodoButtonDeleteAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoButtonDeleteAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoButtonDeleteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the TodoButtonDeleteAllComponent', () => {
    expect(component).toBeTruthy();
  });

  it(`should render 'todo-button-delete-all works!' in tag <p>`, () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.textContent).toContain('todo-button-delete-all works!');
  });
});
