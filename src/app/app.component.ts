import { Component } from '@angular/core';
import { Model, TodoItem } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoApp';
  model = new Model();
  displayMode = false;

  getItems() {
    if(this.displayMode == true){
      return this.model.items;
    }else{
      return this.model.items.filter(item => item.status === false)
    }
  }

  addItem(text,priority){
    if(priority && text.length > 1){
      let todoItemObj = new TodoItem(priority,text,false)
      this.model.items.push(todoItemObj)
    }
  }

  updateMode(){
    if(this.displayMode == false){
      this.displayMode = true;
    }else{
      this.displayMode = false;
    }
  }
}
