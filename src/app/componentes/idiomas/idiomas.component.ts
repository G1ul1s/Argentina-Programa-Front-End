import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.component.html',
  styleUrls: ['./idiomas.component.css']
})
export class IdiomasComponent implements OnInit {
  miPortfolio:any;
  constructor(private datosPortfolio:PersonaService){ }
  ngOnInit(): void { 
  this.datosPortfolio.getPersona().subscribe(data=>{ 
    console.log(data);
  this.miPortfolio=data;});
}
}