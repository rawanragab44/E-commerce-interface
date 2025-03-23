import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
private counter=new BehaviorSubject<number>(0);
  constructor() { }

  getCounter(){
    return this.counter.asObservable();
  }
  setCounter(newCounter:number){
    this.counter.next(newCounter);
  }
}
