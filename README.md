# CompleteApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Route Guards (COMPONENTE CONTACTO)

Estos permiten agregar funcionalidad en distintos momentos del ciclo de vida de una ruta por la que navega el usuario.
1. **CanDeactivate**: determina si el usuario puede salir de una ruta.
2. **CanActivate:** determina si un usuario puede acceder a una ruta especifica.
3. **CanActivateChild:** determina si un usuario puede acceder a una ruta HIJA especifica.
4. **Resolve:** sirve para obtener data antes de la activacion de la ruta.
5. **CanLoad:** permite cargar un modulo de caracteristicas (feacture Module) de manera asincrona.
6. **Carga perezosa:** No es un route guards, pero es de vital importancia manejarla para agilizar la app

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

1. **CanDeactivate**: (ej: un formulario que esta siendo diligenciado y evita que se salga sin haber guardado cambios).
+ Se debe generar el guard con el comando **ng g guard guards/can-deactivate** este guard toca crearlo pues no se encuentra en el listado de las interfaces de la terminal, este se creo en la carpeta guards con el nombre de **can-deactivate-guard.ts**, como un servicio.
+ En la clase del componente del formulario (**contact.component.ts**) donde se va a usar se implementa la interfaz (**allowDeactivate**) que contiene la funcion (**allowLeaveRoute**) que permite salir de la ruta evaluando  si el formulario esta vacio o fue enviado, sino muestra una  ventana de confirmación
+ En la regla de ruteo del componente se agrega el guard canDeactivate ({path:'contact', component: ContactComponent, canDeactivate:[CanDeactivateGuard]})
2. **CanActivate**: (ej: verificar si un usuario esta logueado en una app, sino se redirige al componente de login para que pueda loguearse).
+ Inicialmente para simular el back de logueo, se crea un servicio (en la carpeta shared/services/auth.service.ts) donde se manejan las funciones de logueo, deslogueo y verificacion si el usuario esta logueado, (login, logout, isLoggedIn).
+ En el componente donde se usará el guard CanActivate (shared/components/loginComponent), se intectan en la clase el authService y el routerService(Router) y se crea el evento login() donde por medio del servicio auth se incova la funcion login (this.authService.login();), y se captura la url a la que haya intentado entrar para q sea redirigido una vez este logueado.
+ Luego se genera el guard CanActivate **ng g guard guards/can-activate**, dentro del metodo que genera este servicio se ponen las condiciones necesarias para evaluar si el usuario esta logueado, de ser asi se retorna un true el cual permite que el CanActivate deje acceder al usuario y sino se redirecciona al componente login y después en la plantilla del menu (shared/headers/menuComponent) se agrega el boton login y logout y en la clase se agregan el evento logout y se llama al servicio authService
+ Finalmente se agrega el Guard a la reglas de ruteo del componente post que se mostrara solo cuando el usuario este logueado (
  {path:'posts',component:PostsComponent,canActivate: [CanActivateGuard]},
  {path:'users/:id/posts',component:PostsComponent, canActivate: [CanActivateGuard]},)
+ Importante tener en cuenta q se debe de agregar la regla de ruteo del componente login (app.routing.module)

3. **CanActivateChild**: Usualmente se usa la logica del CaActivate para implementar el CanActivateChild, para ello se reutiliza el servicio que se creo del CanActivate (Guards/can-activate.guard.ts):
+ Se implementa la interfaz **CanActivateChild** y la funcion canActivateChild y dentro de ella se retorna la funcion del canActivate (return this.canActivate(childRoute, state);).
+ Se aplica el guard CanActivateClild en la reglas de ruteo de las rutas hijas (en el ejemplo se implemento en EL MODULO DE USERS =>
const routes: Routes = [
  {path:'users', component:UsersComponent, canActivateChild:[CanActivateGuard],
    children:[
      {path:"", component:UsersListComponent},
      {path:":id", component:UsersDetailsComponent},
    ]
  },

];)
4. **Resolver**: hasta el momento se ha usado el metodo ngOnInit(){} para cargar la data del componente, pero lo ideal seria que se cargara la data antes de mostrar el componente con el fin de obtener una mejor experiencia de usuario por ejemplo que el usuario no tenga que ver la pantalla en blanco mientras carga la data o si la informacion no existe que el componente si quisera sea mostrado y el usuario sea redirigido a otra ventana, para esto se puede hacer uso del **route guard resolver** que se ejecuta antes de la activacion de la ruta y se encarga de conseguiir la data que se va a mostrar y tambien es util para separar responsabilidades, de esta manera el componente quedaria mas libre al no tener que conseguir la informacion (buenas practicas). Ej: Crear resolver para cargar la data de los posts:
+

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
