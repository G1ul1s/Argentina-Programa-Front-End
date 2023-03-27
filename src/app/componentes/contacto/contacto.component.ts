import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  miPortfolio:any;
   constructor(private datosPortfolio:PersonaService){ }
   ngOnInit(): void { 
   this.datosPortfolio.getPersona().subscribe(data=>{ 
     console.log(data);
   this.miPortfolio=data;});
 }
 }
