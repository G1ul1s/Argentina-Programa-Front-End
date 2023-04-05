import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HyS } from '../model/hys';

@Injectable({
  providedIn: 'root'
})
export class HysService {
  hysURL="https://argentina-programa-back-end-springboot.onrender.com/hys/"
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<HyS[]>{ 
    return this.httpClient.get<HyS[]>(this.hysURL + 'lista');
  }

  public detail(id: number):Observable<HyS[]>{ 
    return this.httpClient.get<HyS[]>(this.hysURL + `detail/${id}`);
}

public save(hys: HyS): Observable<any>{ 
  return this.httpClient.post<any>(this.hysURL + 'create', hys);
}

public update (id: number, hys: HyS): Observable<any>{ 
  return this.httpClient.put<any>(this.hysURL + `update/${id}`, hys);
}

public delete(id: number): Observable<any>{ 
  return this.httpClient.delete<any>(this.hysURL + `delete/${id}`);
}
}
