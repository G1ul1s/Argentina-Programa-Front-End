import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-acercademi',
  templateUrl: './acercademi.component.html',
  styleUrls: ['./acercademi.component.css']
})
export class AcercademiComponent implements OnInit {
  persona: persona = new persona("", "", "");
  isLogged:boolean=false;
  constructor(public personaService: PersonaService, private tokenService: TokenService) { }

  ngOnInit(): void { 
    this.personaService.getPersona().subscribe(data=>{    this.persona=data;});
  }
}
