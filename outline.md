Phase 1

- Agile
- VCS (Git)
- Html
- CSS (Bootstrap)
- JS

Phase 2

JSON Server
Angular
Testing
PWA
Storybook
Redux

thin client

Client Server Persistence
Frontend <----------REST (JSON)----------> Backend <--------------------> Database

HTML
CSS (Bootstrap)
Javascript

Backbone
Meteor

Angular <---------------------------------> JSON server

                                Node (Express)                Mongo DB (NoSQL)

JSON Server

1. SOAP (XML)
2. REST (JSON)
3. GraphQL
4. tRPC

REST

HTTP

1. Define entities Users, Posts, Comments
2. CRUD access using HTTP methods
   Create Read Update Delete
   POST GET PUT DELETE

MVC

Model View Controller

Data Model User Interface Connects the view and model

User
id
name
first_name
last_name
dob
country

Post
id
picture?
video?
text

{
id: '23',
name: 'wef'
}

==========================================================================

AngularJS v0.x, v1.99 ng-init ng-repeat

Angular v2.x

Typescript

@Decorator

@Component{
selector: <navbar>
style: ..//..css
template: <h2>Nav Bar</h2>
}

@Input
@Output
@NgModule
@Injectable

Angular Application

Modules
Components
NavBar Component
selector: <nav-bar />
encapsulation
styles
logic (javascript/typescript)
MVC
model view controller
(local data) (template) (typescript code)
(data from a
service) html with some
extra features
=========================================================

AngularJS Directives which do not exist in Angular 2.x

ng-app: In Angular, you bootstrap your application manually using the @NgModule decorator instead of using the ng-app directive.

ng-init: In Angular, you can use constructor functions or ngOnInit lifecycle hook to initialize data in your component instead of using the ng-init directive.

ng-model: In Angular, you can use the two-way data binding syntax [(ngModel)] instead of the ng-model directive.

ng-repeat: In Angular, you can use the \*ngFor directive to iterate over an array or iterable object instead of the ng-repeat directive.

ng-show and ng-hide: In Angular, you can use the \*ngIf directive to conditionally show or hide elements in your template.

ng-click: In Angular, you can use the (click) event binding syntax to bind a method to a click event instead of using the ng-click directive.

ng-class and ng-style: In Angular, you can use the [class] and [style] bindings to add classes and styles dynamically to elements in your template.

ng-bind

---

ng-app
ng-bind
ng-change
ng-checked
ng-class
ng-class-even
ng-class-odd
ng-click
ng-cloak
ng-controller
ng-disabled
ng-focus
ng-form
ng-hide
ng-href
ng-if
ng-include
ng-init
ng-keydown
ng-keypress
ng-keyup
ng-model
ng-mousedown
ng-mouseenter
ng-mouseleave
ng-mousemove
ng-mouseout
ng-mouseover
ng-mouseup
ng-options
ng-readonly
ng-repeat
ng-repeat-end
ng-repeat-start
ng-selected
ng-show
ng-style
ng-submit
ng-switch
ng-switch-default
ng-switch-when
ng-value
ng-view

===========================================

ng new some-project-name

ng serve

ng generateng component/directive/module/pipe some-artifact-name

ng build

ng add some-library

============================================

major.minor.patch

v1.5.4

v1.5.5

^ ~

============================================

1. Parent to child, @Input
   in parent <child [message]="hello from parent"></child>
   in child @Input message: string;

2. Child to Parent, @Output
   in child
   @Output() ee = new EventEmitter;
   this.ee.emit('some data')
   in parent
   <child (ee)="console.log($event)" ></child>

2 way data binding (ng-model does not exist anymore)

- . [(2way)]
