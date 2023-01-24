import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoButtonDeleteAllComponent } from './todo-button-delete-all.component';

describe('TodoButtonDeleteAllComponent', () => {
  let component: TodoButtonDeleteAllComponent;
  let fixture: ComponentFixture<TodoButtonDeleteAllComponent>;
  let compiled: HTMLElement;

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
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('should create the TodoButtonDeleteAllComponent', () => {
    expect(component).toBeTruthy();
  });

  it(`should render a button with the text 'Delete all'`, () => {
    expect(compiled.querySelectorAll('button')?.length).toBe(1);
    expect(compiled.querySelector('button')?.textContent).toContain('Delete all');
  });
});
