# CompleteApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

6. Multiples modulos -> ng g module users/users --module app --flat --routing (--module app lo importa automaticamente al moduo raiz)
7. Rutas hijas -> ayudan a definir componentes especificos que seran mostrados dentro de la plantilla del un componente padre (Ejm:
routes =[
  {path:"users", componente: usersComponent} (Componente padre),
  Children :[
    {path:":id", component: userListcomponent}
  ]
]) y se agrega el tag router-outlet a la plantilla del componente padre (en este caso usersComponent)
8. Rutas secundarias -> a diferencia de las rutas hijas estas se muestran asi el usuario navegue a otras vistas (ejemplo: el chat), para esto el router-outlet (APLICADO EN EL APPCOMPONENT) debe de llevar nombre, (*1*) se le pasa el atributo name="nombre" al tag router-outlet (<router-outlet name="buttonPanic"></router-outlet>), (*2*) ademas en la regla de ruteo se pone outlet:'nombre' ({path:'panic', component:ButtonPanicComponent, outlet:'buttonPanic'},) (*3*) y en la plantilla para navegar hacia esta se pone ([routerLink]="[{outlets: {buttonPanic: ['panic']}}]"), (*4*) finalmente para cerrar la ventana o vista secundaria se puede usar en la clase el evento close(){
    this.routerService.navigate([{ outlets: { buttonPanic: null } }]);
  }


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
