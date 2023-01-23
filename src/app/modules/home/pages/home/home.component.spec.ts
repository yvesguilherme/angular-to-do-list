import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HeaderComponent } from '../../components/header/header.component';
import { TodoListComponent } from '../../components/todo-list/todo-list.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        HeaderComponent,
        TodoListComponent
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the HomeComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should create the HeaderComponent', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const headerComponent = fixture.componentInstance;
    expect(headerComponent).toBeTruthy();
  });

  it('should create the TodoListComponent', () => {
    const fixture = TestBed.createComponent(TodoListComponent);
    const todoListComponent = fixture.componentInstance;
    expect(todoListComponent).toBeTruthy();
  });

  it('should add "container" class to section tag', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('section')?.classList).toContain('container');
  });

  it(`should return two childNodes inside section`, () => {
    const compiled = fixture.nativeElement as HTMLElement;    
    expect(compiled.querySelectorAll('section')[0].childNodes.length).toBe(2);
  });
});
