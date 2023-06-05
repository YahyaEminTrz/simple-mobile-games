/*import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoListPage } from './todo-list.page';

describe('TodoListPage', () => {
  let component: TodoListPage;
  let fixture: ComponentFixture<TodoListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TodoListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
}); */


import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.page.html',
  styleUrls: ['./todo-list.page.scss']
})
export class TodoListPage {
  tasks: string[] = [];
  newTask: string = '';

  addTask() {
    if (this.newTask) {
      this.tasks.push(this.newTask);
      this.newTask = '';
    }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
  
  resizeTextarea(textarea: any, index: number) {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
    this.tasks[index] = textarea.value;
  }
  
  
  updateTask(task: string, index: number) {
    this.tasks[index] = task.trim(); 
  }
  
}
