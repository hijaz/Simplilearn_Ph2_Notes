import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-random-cat',
  template: `
  <h3>Random Cat Generator</h3>
  <img [src]="catUrl" alt="some cat image" [style.max-width.px]="500">
    <button (click)="getRandomCat()">Get Random Cat</button>
  `
})
export class RandomCatComponent {
  catUrl: string = '';

  constructor(private http: HttpClient){}

  getRandomCat(){
    this.http.get('https://api.thecatapi.com/v1/images/search')
    .pipe(
      map((response: any) => {
        return response[0].url
      })
    )
    .subscribe((imgUrl: string) => {
      this.catUrl = imgUrl;
    })
  }

}
