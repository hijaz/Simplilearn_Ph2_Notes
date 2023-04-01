import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductComponent } from './components/product/product.component';
import { Error404Component } from './components/error404/error404.component';

export const routes: Routes = [
  { path: '', redirectTo: 'contactus', pathMatch: 'full' },
  { path: 'main', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: AppComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contactus', component: ContactComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: '**', component: Error404Component },
];
