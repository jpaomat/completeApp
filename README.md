# CompleteApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

*Http-Request -> En el modulo donde se use, se inserta el modulo HttpClientModule (import { HttpClientModule } from '@angular/common/http';) y en el servicio donde se vaya a usar se inserta HttpClient (import { HttpClient } from '@angular/common/http';)
*Servicio de ruteo -> se inserta Router en el constructor de la clase del componente donde se vaya a usar, este se usa por medio de un evento
*Acceder a los parametros de la url activada -> se inserta el servicio ActivateRoute para tomar algun parametro de una ruta
*PathMatch -> {path:'', redirectTo:'/users', pathMatch:'full'}, o se maneja full o prefix
*Rutas no encontradas ->{path:'**', component: NotFoundComponent}
*Multiples modulos ->

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
