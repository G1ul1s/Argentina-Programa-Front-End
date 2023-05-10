
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/servicios/auth.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})

export class HysComponent implements OnInit {
  datos: any;
  form:FormGroup;
  cerEdit: any;

  constructor(private datosPortfolio:PortfolioService, private formBuilder: FormBuilder,private autenticado: AuthService) { 

    this.form = this.formBuilder.group({

      id:["",Validators.required],
      school:["",Validators.required],
      img:["",Validators.required],
      title:["",Validators.required],
      expedition:["",Validators.required],
      certificate:["",Validators.required],})
  }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.datos=data;
    })
  }

  newCertificaciones(event:Event, cerId:any):void {
    event.preventDefault();
    this.datosPortfolio.agregarHys(this.form.value, cerId).subscribe(data =>{
      console.log(data);
      this. ngOnInit();
    })
}

verCertificado(cerEdit:any): void {
  this.datosPortfolio.verHys(cerEdit).subscribe(data => { 
    this.form.patchValue({
      id:data.id,
      school:data.school,
      img:data.img,
      title:data.title,
      expedition:data.expedition,
      certificate:data.certificate,
    })
    this.cerEdit = data;
    console.log(data);
  });
}

editarCertificacion(): void{
  this.datosPortfolio.editarHys(this.form.value).subscribe(data =>{
  console.log(data);
  this.cerEdit=data;
  this. ngOnInit();
  })
}

borrarCertificacion(id: any, persona:any){
  this.datosPortfolio.borrarHys(id, persona).subscribe(data =>{
    this. ngOnInit();
  })
}

logueado(){
  return this.autenticado.logged();
 } 
}