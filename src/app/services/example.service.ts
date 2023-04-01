import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  private data: string = 'some init val';

  constructor() { }

  setData(data: string){
    this.data = data;
  }

  getData(): string{
    return this.data;
  }
}
