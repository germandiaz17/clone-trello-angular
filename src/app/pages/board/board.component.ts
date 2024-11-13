import { Component } from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ToDo, Column } from '../../model/todo.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [NavbarComponent, DragDropModule, CommonModule, FormsModule, FontAwesomeModule],
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

  faPlus = faPlus

  newColumnTItle:string ='' 

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

  addColumn() {
    if(this.newColumnTItle.trim()) {
      this.columns.push({
        title: this.newColumnTItle,
        todos:[]
      })
      this.newColumnTItle = ''
    }
  }
}
