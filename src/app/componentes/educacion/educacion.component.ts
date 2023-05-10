import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, window } from 'rxjs';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { AuthService } from 'src/app/servicios/auth.service';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  datos: any;
  form: FormGroup;
  eduEdit:any;
  
  
  constructor(private datosPortfolio:PortfolioService, private formbuilder:FormBuilder, private autenticado: AuthService) {

    this.form = this.formbuilder.group({

      id:["",Validators.required],
      college:["", Validators.required],
      title:["", Validators.required],
      img:["", Validators.required],
      description: ["", Validators.required],
      certificate:["", Validators.required],

   })
   }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.datos=data;
    });
  }

  newEducacion(event:Event, PersonaId:any):void  {
    event.preventDefault;
    this.datosPortfolio.agregarEducacion(this.form.value, PersonaId).subscribe(data =>{
      console.log(data);
      this. ngOnInit();
    })
  }

  verEducacion(eduEdit:any): void {
    this.datosPortfolio.verEducacion(eduEdit).subscribe(data => {
      this.form.patchValue({
        id: data.id,
        college:data.college,
        title:data.title,
        img:data.img,
        description: data.description,
        certificate:data.certificate,
      })
      this.eduEdit=data;
      console.log(data);
    })
  }

  editarEducacion():void {
    this.datosPortfolio.editarEducacion(this.form.value).subscribe(data => {
      console.log(data);
      this.eduEdit=data;
      this. ngOnInit();
    })
  }

  borrarEducacion(id:any, persona: any) {
    this.datosPortfolio.borrarEducacion(id, persona).subscribe(data => {
      this. ngOnInit();
  })
}

logueado(){
  return this.autenticado.logged();
 } 
}