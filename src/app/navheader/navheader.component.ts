import { Component, inject, Inject } from '@angular/core';
import { RouterLink ,RouterLinkActive} from '@angular/router';
import { CounterService } from '../services/counter.service';
@Component({
  selector: 'app-navheader',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navheader.component.html',
  styleUrl: './navheader.component.css'
})
export class NavheaderComponent {
 countervalue:number=0;
 counterService=inject(CounterService);
  constructor() { }
  ngOnInit() {
     this.counterService
     .getCounter()
     .subscribe((response)=>this.countervalue=response);
   
  }
 
}
