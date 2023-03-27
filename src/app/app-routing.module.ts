import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarExperienciaComponent } from './componentes/experiencia-laboral/editar-experiencia/editar-experiencia.component';
import { NewExperienciaComponent } from './componentes/experiencia-laboral/new-experiencia/new-experiencia.component';
import { EditarEducacionComponent } from './componentes/formacion-academica/editar-educacion/editar-educacion.component';
import { NewEducacionComponent } from './componentes/formacion-academica/new-educacion/new-educacion.component';
import { HomeComponent } from './componentes/home/home.component';
import { EdithysComponent } from './componentes/hys/edithys/edithys.component';
import { NewhysComponent } from './componentes/hys/newhys/newhys.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistrarseComponent } from './componentes/registrarse/registrarse.component';

const appRoutes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'nuevousuario', component: RegistrarseComponent},
  { path: 'nuevaexp', component: NewExperienciaComponent},
  { path: 'editexp/:id', component: EditarExperienciaComponent},
  { path: 'nuevaformacion', component: NewEducacionComponent},
  { path: 'editarformacion/:id', component: EditarEducacionComponent },
  { path: 'nuevahys', component: NewhysComponent},
  { path: 'editarhys/:id', component: EdithysComponent }
];
export const routing = RouterModule.forRoot(appRoutes);

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }