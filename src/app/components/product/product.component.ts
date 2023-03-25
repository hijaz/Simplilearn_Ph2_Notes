import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  id: string = '';
  name: string | null = '';
  loc: string | null = '';

  constructor(private route: ActivatedRoute) {
    route.params.subscribe((params) => {
      this.id = params['id'];
    });

    route.queryParamMap.subscribe((params) => {
      this.name = params.get('name');
      this.loc = params.get('loc');
    });
  }
}
