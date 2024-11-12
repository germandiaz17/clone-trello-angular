import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './btn.component.html'
})
export class BtnComponent {
  
  @Input() typeBtn: 'button' | 'reset' | 'submit' = 'button'
  @Input() colorBtn:string = 'primary'

}
