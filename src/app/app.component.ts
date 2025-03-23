import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import{ProdutlistComponent} from './produtlist/produtlist.component'
import { NavheaderComponent } from "./navheader/navheader.component";

@Component({
  selector: 'app-root',
  imports: [ProdutlistComponent, RouterOutlet, NavheaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ecommerce';
}
