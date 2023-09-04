import { loadRemoteModule } from '@nx/angular/mf';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      path: 'login',
      loadChildren: () =>
          loadRemoteModule('login', './Module').then(
              (m) => m.RemoteEntryModule
           ),
           
  },
  // {
  //   path: 'welcome',
  //   component: NxWelcomeComponent,
  // },

], { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
