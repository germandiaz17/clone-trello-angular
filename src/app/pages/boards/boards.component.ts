import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

//Importaciones de componentes
import { NavbarComponent } from '../../components/navbar/navbar.component';
import {CdkAccordionModule} from '@angular/cdk/accordion';

//Importaciones de iconos
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import { faBox, faWaveSquare, faClock, faAngleUp, faAngleDown, faHeart, faBorderAll, faUsers, faGear } from '@fortawesome/free-solid-svg-icons'
import {faTrello} from '@fortawesome/free-brands-svg-icons'


@Component({
  selector: 'app-boards',
  standalone: true,
  imports: [NavbarComponent, FontAwesomeModule, CdkAccordionModule, CommonModule],
  templateUrl: './boards.component.html'
})
export class BoardsComponent {
  faBox = faBox
  faWaveSquare = faWaveSquare
  faClock = faClock
  faTrello = faTrello
  faAngleUp = faAngleUp
  faAngleDown = faAngleDown
  faHeart = faHeart
  faBorderAll = faBorderAll
  faUsers = faUsers
  faGear = faGear

  items = [
    {label: 'item 1', items: [{label: 'Sub Item 1,1'}, {label: 'Sub Item 1,2'}]},
    {label: 'item 2', items: [{label: 'Sub Item 2,1'}]},
    {label: 'item 3', items: [{label: 'Sub Item 3,1'}, {label: 'Sub Item 3,2'}, {label: 'Sub Item 3,3'}]}
  ]
}
