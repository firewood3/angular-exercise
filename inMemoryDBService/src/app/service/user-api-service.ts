import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserApiService {

  constructor(private _http: HttpClient) {}

  getUsers(): Observable<any> {
    return this
      ._http.get("api/users");
  }

  getUser(): Observable<any> {
    return this._http.get("api/user");
  }
}
