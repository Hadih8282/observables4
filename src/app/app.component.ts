import { Component, OnInit } from '@angular/core';
import { fromEvent, map, take, takeWhile, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'observables4';

  ngOnInit(): void {
    
    fromEvent(document,'click').pipe(
      map(event => event as MouseEvent),
      map(item => {
        return {
          X: item.offsetX,
          Y: item.offsetY
        }
      }),
      // take(5),
      // takeWhile(item => item.X < 1000)
      // tap(i => console.log(i))
    ).subscribe(console.log);

  }

}
