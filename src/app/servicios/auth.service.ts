import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NuevoUsuario } from '../model/nuevo-usuario';
import { Observable } from 'rxjs';
import { LoginUsuario } from '../model/login-usuario';
import { JwtDto } from '../model/jwt-dto';
//import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authURL = "http://localhost:8080/auth/"

 // URL = environment.URL + 'authlogin/';

  constructor(private httpClient: HttpClient) { }

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
    return this.httpClient.post<any>(this.authURL + 'nuevousuario', nuevoUsuario)
  }
  public login(loginUsuario: LoginUsuario): Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.authURL + '/login', loginUsuario)
  }
}
