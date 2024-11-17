import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HttpClient } from '@angular/common/http';
import {CdkTableModule} from '@angular/cdk/table';
import { CommonModule } from '@angular/common';

interface Product {
  id:string,
  title: string,
  price: number,
  description: string,
  images: string[]
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NavbarComponent, CdkTableModule, CommonModule],
  templateUrl: './table.component.html'
})

export class TableComponent {

  products: Product[] = []
  columns: string[] = ['#No', 'Name', 'price', 'cover']
  
  private http = inject(HttpClient)
  constructor() {}

  ngOnInit() {
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products').subscribe(data => {this.products = data})
  }
}
