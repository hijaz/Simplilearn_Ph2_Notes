import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExampleService } from 'src/app/services/example.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-random-cat',
  template: `
  <h3>Random Cat Generator</h3>
  <img [src]="catUrl" alt="some cat image" [style.max-width.px]="500">
    <button (click)="getRandomCat()">Get Random Cat</button>
    {{ catUrlPath }}
  `
})
export class RandomCatComponent {
  catUrl: string = '';
  catUrlPath: string = '';

  constructor(private http: HttpClient, private exampleService: ExampleService){
    this.catUrlPath = exampleService.getData();
  }

  getRandomCat(){
    this.http.get('https://api.thecatapi.com/v1/images/search')
    .pipe(
      map((response: any) => {
        return response[0].url
      })
    )
    .subscribe((imgUrl: string) => {
      this.catUrl = imgUrl;
      this.exampleService.setData(imgUrl);
    })
  }

}
