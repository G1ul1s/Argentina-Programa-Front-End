import { Injectable } from '@angular/core';
//Suscribe los datos y que reciba respuesta asincrona
import { Observable } from 'rxjs';
//Hacer peticiones y CRUD
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PortfolioService {
   
  url:string;
  constructor(private http:HttpClient) { 

    this.url = 'https://argentina-programa-back-end-springboot.onrender.com';              /* Para pruebas locales ;  'http://localhost:8080'*/

  }
     /*Persona*/
  obtenerDatos (): Observable<any>{
    return this.http.get(this.url+'/ver/persona');
  }
  verPersona(id:any): Observable<any>{
    return this.http.get(this.url+'/ver/persona/'+id);
  }
  editarPersona(persona: any): Observable<any>{
    return this.http.put(this.url+'/update/persona',persona);
  }
    /*Educacion*/
  

  agregarEducacion(form:any, PersonaId:any): Observable<any>{
    return this.http.post(this.url+'/new/educacion/'+ PersonaId, form); 
  }
  verEducacion(id:any): Observable<any>{
    return this.http.get(this.url+'/ver/educacion/'+ id);
  }
  editarEducacion(educacion:any): Observable<any>{
    return this.http.put(this.url+'/update/educacion', educacion);
  }
  borrarEducacion(id:any, persona: any ):Observable<any>{
    return this.http.delete(this.url+'/delete/educacion'+id+'/'+ persona );
  }

  /*Experiencia*/

  agregarExperiencia(form:any, expId:any): Observable<any>{
    return this.http.post(this.url+'/new/experiencia/'+ expId, form); 
  }
  verExperiencia(id:any): Observable<any>{
    return this.http.get(this.url+'/ver/experiencia/'+ id);
  }
  editarExperiencia(experiencia: any): Observable<any>{
    return this.http.put(this.url+'/update/experiencia', experiencia);
  }
  borrarExperiencia(id:any, persona:any): Observable<any>{
    return this.http.delete(this.url+'/delete/experiencia/'+ id +"/"+ persona);
  }

  /*Certificados*/

  agregarHys(form:any, cerId:any): Observable<any>{
    return this.http.post(this.url+'/new/hys/'+ cerId, form); 
  }
  verHys(id:any): Observable<any>{
    return this.http.get(this.url+'/ver/hys/'+ id);
  }

  editarHys(certificacciones: any): Observable<any>{
    return this.http.put(this.url+'/update/hys', certificacciones);
  }
  
  borrarHys(id: any, persona: any): Observable<any>{
    return this.http.delete(this.url+'/delete/hys/'+ id +"/"+ persona);
  }
}