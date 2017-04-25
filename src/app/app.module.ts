import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Router } from '@angular/router';

import { AppComponent }            from './app.component';
import { AppRoutingModule }        from './app-routing.module';

import { HeroesModule }            from './heroes/heroes.module';
import { ComposeMessageComponent } from './compose/compose-message.component';
import { LoginRoutingModule }      from './login/login-routing.module';
import { LoginComponent }          from './login/login.component';
import { PageNotFoundComponent }   from './not-found/not-found.component';

import { DialogService }           from './services/dialog.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HeroesModule,
    LoginRoutingModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    ComposeMessageComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  providers: [
    DialogService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
