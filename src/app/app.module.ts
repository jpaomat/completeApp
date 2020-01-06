import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/headers/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { ButtonPanicComponent } from './shared/components/button-panic/button-panic.component';
import { ContactComponent } from './shared/components/contact/contact.component';
import { LoginComponent } from './shared/components/login/login.component'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ButtonPanicComponent,
    ContactComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UsersModule,
    PostsModule,
    AppRoutingModule,//es recomendable dejarlo de ultimas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
