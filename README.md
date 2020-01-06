# CompleteApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Route Guards (COMPONENTE CONTACTO)

Estos permiten agregar funcionalidad en distintos momentos del ciclo de vida de una ruta por la que navega el usuario.
1. CanDeactivate: determina si el usuario puede salir de una ruta.
2. CanActivate: determina si un usuario puede acceder a una ruta especifica.
3. CanActivateChild: determina si un usuario puede acceder a una ruta HIJA especifica.
4. Resolve: sirve para obtener data antes de la activacion de la ruta.
5. CanLoad: permite cargar un modulo de caracteristicas (feacture Module) de manera asincrona.
6. Carga perezosa: No es un route guards, pero es de vital importancia manejarla para agilizar la app

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

1. CanDeactivate: (ej: un formulario que esta siendo diligenciado y evita que se salga sin haber guardado cambios).
1.1 se debe generar el guard con el comando ***ng g guard guards/can-deactivate*** este guard toca crearlo pues no se encuentra en el angular, este se creo en la carpeta guards con el nombre de **can-deactivate-guard.ts**.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
