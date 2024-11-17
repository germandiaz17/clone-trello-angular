import { Component } from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ToDo, Column } from '../../model/todo.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { BtnComponent } from '../../components/btn/btn.component';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoModalComponent } from '../../components/todo-modal/todo-modal.component';
import { Dialog } from '@angular/cdk/dialog'

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [NavbarComponent, DragDropModule, CommonModule, FormsModule, FontAwesomeModule, BtnComponent, ReactiveFormsModule],
  templateUrl: './board.component.html',
  styles: [`
      .cdk-drop-list-dragging .cdk-drag {
        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
      }
      .cdk-drag-animating {
        transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
      }
    `]
})
export class BoardComponent {

  constructor(private dialog: Dialog) { }

  faPlus = faPlus

  newColumnTitle = new FormControl<string>('') 
  miControl = new FormControl<string>('');

  columns: Column[] = [
    {
      title: 'ToDo', 
      todos:[    
        {id: '1', title: 'hacer el desayuno'},
        {id: '2', title: 'estudiar para el examen'},
        {id: '3', title: 'arreglar la moto'},
        {id: '4', title: 'jugar xbox'}
      ]
    },
    {
      title: 'Doing', 
      todos:[    
        {id: '5', title: 'codificar'},
        {id: '6', title: 'tomar agua'}
      ]
    },
    {
      title: 'Done', 
      todos:[    
        {id: '7', title: 'dormir 2 horas'}
      ]
    }
  ]

  drop(event: CdkDragDrop<ToDo[]>) {
    if(event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex)
    } else {
      transferArrayItem(
        event.previousContainer.data, 
        event.container.data, 
        event.previousIndex, 
        event.currentIndex
      )
    }
  }

  dropColumn(event: CdkDragDrop<ToDo[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      )
    }
  }

  addColumn() {
    if(this.newColumnTitle.value?.trim()) {
      this.columns.push({
        title: this.newColumnTitle.value,
        todos:[]
      })
      this.newColumnTitle.setValue('')
    }
  }

  addCard(title:string) {
    if(this.miControl.value?.trim()) {
      const obj = this.columns.find(t => t.title === title)
      obj?.todos.push({id: Date.now().toString(), title: this.miControl.value ?? ''})
      this.miControl.setValue('')
    }
  }

  openDialog(todo: ToDo) {
    const dialogRef = this.dialog.open(
      TodoModalComponent, 
      {
        minWidth:'300px', 
        maxWidth:'50%',
        data: {
          todo: todo
        }
      }
    )
    dialogRef.closed.subscribe(output => console.log(output))
  }

}
