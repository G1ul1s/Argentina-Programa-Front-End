import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HyS } from 'src/app/model/hys';
import { HysService } from 'src/app/servicios/hys.service';


@Component({
  selector: 'app-edithys',
  templateUrl: './edithys.component.html',
  styleUrls: ['./edithys.component.css']
})

export class EdithysComponent implements OnInit {
  hys: HyS = null;

  constructor(private sHys: HysService, private activatedRouter: ActivatedRoute, private router: Router){  }
  
  ngOnInit(): void {
    
    const id = this.activatedRouter.snapshot.params['id'];
    this.sHys.detail(id).subscribe(
     data => {
      !this.hys ; data; 
     }, err => {
       alert("Error al modificar la experiencia");
       this.router.navigate(['']); 
     }
  )
  }
  onUpdate(): void{
   const id = this.activatedRouter.snapshot.params['id'];
   this.sHys.update(id, this.hys).subscribe(
    data => {
      this.router.navigate(['']); 
    },err => {
      alert("Error al modificar la experiencia");
      this.router.navigate(['']); 
    }
   )
  }
}
