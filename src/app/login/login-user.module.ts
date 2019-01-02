import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginUserComponent } from './login-user/login-user.component';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  declarations: [LoginUserComponent]
})
export class LoginUserModule { }
