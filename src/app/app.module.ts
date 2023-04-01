import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { UnlessDirective } from './directives/unless.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { LifecycleDemoParentComponent } from './components/parent-lifecycle-demo/parent-lifecycle-demo.component';
import { LifecycleChildDemoComponent } from './components/lifecycle-demo/lifecycle-demo.component';
import { PipesDemoComponent } from './components/pipes-demo/pipes-demo.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { AnimationExampleComponent } from './components/animation-example/animation-example.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProductComponent } from './components/product/product.component';
import { Error404Component } from './components/error404/error404.component';
import { MouseCoordinatesComponent } from './components/mouse-coordinates/mouse-coordinates.component';
import { RandomCatComponent } from './components/random-cat/random-cat.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ParentComponent,
    ChildComponent,
    UnlessDirective,
    HighlightDirective,
    LifecycleDemoParentComponent,
    LifecycleChildDemoComponent,
    PipesDemoComponent,
    ReversePipe,
    AnimationExampleComponent,
    TodoListComponent,
    TodoListItemComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    AboutComponent,
    ContactComponent,
    NavigationComponent,
    ProductComponent,
    Error404Component,
    MouseCoordinatesComponent,
    RandomCatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [NavigationComponent],
})
export class AppModule {}
