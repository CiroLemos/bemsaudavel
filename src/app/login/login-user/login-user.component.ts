import { Component, OnInit } from '@angular/core';

import { MysqlService } from '../../shared/mysql.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  constructor(private mysqlService: MysqlService) { }

  ngOnInit() {
    this.mysqlService.getUsers();
  }

}
