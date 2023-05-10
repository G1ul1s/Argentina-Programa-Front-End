import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProxyService implements HttpInterceptor {
  constructor(private readonly http: HttpClient) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const proxyReq = req.clone({
      url: `https://argentina-programa-back-end-springboot.onrender.com/${req.url}`
    });
    return next.handle(proxyReq);
  }

  get(url: string, options?: any): Observable<any> {
    return this.http.get(url, options);
  }

  post(url: string, data: any, options?: any): Observable<any> {
    return this.http.post(url, data, options);
  }

  put(url: string, data: any, options?: any): Observable<any> {
    return this.http.put(url, data, options);
  }

  delete(url: string, options?: any): Observable<any> {
    return this.http.delete(url, options);
  }

getRecords(): Observable<any[]>{
  return this.get('/login/get/json');
}

updateRecord(id: number, data: any): Observable<any>{
  return this.put(`/records/${id}`, data);
}

deleteRecord(id: number): Observable<any>{
  return this.delete(`/records/${id}`);
}

  
}
