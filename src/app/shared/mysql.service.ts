import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MysqlService {

  constructor(private http: HttpClient) { }

  getUsers(): any {
    let url = 'http://localhost:8081/dbConnection.php';
    //let url = 'http://www.divinasalada.com.br/dbConnection.php';
    return this.http.get(url)
      .subscribe(res => console.log(res));
  }
}
