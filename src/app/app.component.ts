import { Component, ViewChild } from '@angular/core';
import { ProductsComponent } from './components/products/products.component';

@Component({
  selector: 'myfirstapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'assignment';

  @ViewChild(ProductsComponent) child!: ProductsComponent;
  showTable() {
    this.child.renderValues();
  }

}
