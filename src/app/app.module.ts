import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { UnlessDirective } from './directives/unless.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { LifecycleDemoParentComponent } from './components/parent-lifecycle-demo/parent-lifecycle-demo.component';
import { LifecycleChildDemoComponent } from './components/lifecycle-demo/lifecycle-demo.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
