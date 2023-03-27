import { Component, OnInit } from '@angular/core';
import { HyS } from 'src/app/model/hys';
import { HysService } from 'src/app/servicios/hys.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})
export class HysComponent implements OnInit{
  hys: HyS [] = [];

  constructor(private sHyS: HysService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarHyS();
      if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  cargarHyS():void{
    this.sHyS.lista().subscribe(data=>{this.hys = data});
}
delete(id?:number){
  if(id != undefined){ 
    this.sHyS.delete(id).subscribe(
      data => {
        this.cargarHyS();
      }, err => {
        alert("No se pudo cargar la Educacion");
       } 
   )
  }
 }
}

