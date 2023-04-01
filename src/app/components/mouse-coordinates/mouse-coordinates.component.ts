import { Component, ElementRef, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-mouse-coordinates',
  template: `<h3>Mouse Coords</h3>
    <p>{{ coordinates }}</p>
  `
})
export class MouseCoordinatesComponent implements OnInit{
  coordinates: string = '';

  constructor(private elementRef: ElementRef){}

  ngOnInit(): void {
    fromEvent(this.elementRef.nativeElement, 'mousemove')
      .pipe(
        map((event: any) => {
          return `X: ${event.clientX}, Y:${event.clientY}`
        })
      )
      .subscribe((coords: string) => {
        this.coordinates = coords;
      })
  }

}
