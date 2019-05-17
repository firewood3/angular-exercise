import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import {UserApiService} from './service/user-api-service';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {UserInMemoryUsers} from './in-memory-data/user/user-in-memory-users';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      UserInMemoryUsers, { dataEncapsulation: false }
    )
  ],
  providers: [UserApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
