import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-formacion-academica',
  templateUrl: './formacion-academica.component.html',
  styleUrls: ['./formacion-academica.component.css']
})
export class FormacionAcademicaComponent implements OnInit {
  educacion: Educacion [] = [];

  constructor(private sEducacion: EducacionService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarEducacion();
      if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  cargarEducacion():void{
    this.sEducacion.lista().subscribe(data=>{this.educacion = data});
}
delete(id?:number){
  if(id != undefined){ 
    this.sEducacion.delete(id).subscribe(
      data => {
        this.cargarEducacion();
      }, err => {
        alert("No se pudo cargar la Educacion");
       } 
   )
  }
 }
 }