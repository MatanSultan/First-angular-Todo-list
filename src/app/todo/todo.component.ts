import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CdkDragDrop,moveItemInArray,transferArrayItem } from '@angular/cdk/drag-drop';
import { itask } from '../MODEL/itask';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
todoForm !: FormGroup;
task : itask [] = [
  {
    description: ' ללמוד Angular',
    done: false
  },
  {
    description: 'ללמוד React',
    done: false
  },
  {
    description: ' לעשות גלופה לפרויקט ',
    done: false
  },
  
  
];
inprogress : itask [] = [


  {
    description: ' לימוד JAVA',
    done: false
  },
  {
    description: 'לימוד  TypeScript',
    done: false
  },
];
done : itask [] = [];
  constructor(private fb : FormBuilder)  {}
    


  ngOnInit(): void {
    this.todoForm = this.fb.group({
      item: ['', Validators.required]
 
    });
  }
addTask(){
  this.task.push({

  
    description: this.todoForm.value.item,
    done: false
  })
}
deleteTask(i :number){
  this.task.splice(i,1);
}

    drop(event: CdkDragDrop<itask[]>) {
      if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      } else {
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex,
        );
      }
      }
  
}
