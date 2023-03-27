import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HyS } from 'src/app/model/hys';
import { HysService } from 'src/app/servicios/hys.service';

@Component({
  selector: 'app-newhys',
  templateUrl: './newhys.component.html',
  styleUrls: ['./newhys.component.css']
})

export class NewhysComponent implements OnInit {
  nombre :string;
  porcentaje  :number;
  
  constructor(private sHyS: HysService, private router: Router){}
  ngOnInit(): void {
  }
  onCreate(): void{
  const hys= new HyS (this.nombre, this.porcentaje);
  this.sHyS.save(hys).subscribe(
    data=>{
      alert("Skill añadida");
      this.router.navigate(['']);
    }, err =>{
      alert("Fallo");
      this.router.navigate(['']);
    }
  )
  }
}
