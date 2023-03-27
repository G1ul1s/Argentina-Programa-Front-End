import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AcercademiComponent } from './componentes/acercademi/acercademi.component';
import { ExperienciaLaboralComponent } from './componentes/experiencia-laboral/experiencia-laboral.component';
import { FormacionAcademicaComponent } from './componentes/formacion-academica/formacion-academica.component';
import { IdiomasComponent } from './componentes/idiomas/idiomas.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InterceptorProvider } from './servicios/interceptor-service';
import { HttpClientModule } from '@angular/common/http';
import { LogoComponent } from './componentes/encabezado/logo/logo.component';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { NewExperienciaComponent } from './componentes/experiencia-laboral/new-experiencia/new-experiencia.component';
import { EditarExperienciaComponent } from './componentes/experiencia-laboral/editar-experiencia/editar-experiencia.component';
import { NewEducacionComponent } from './componentes/formacion-academica/new-educacion/new-educacion.component';
import { EditarEducacionComponent } from './componentes/formacion-academica/editar-educacion/editar-educacion.component';
import { BannerComponent } from './componentes/encabezado/banner/banner.component';
import { HysComponent } from './componentes/hys/hys.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NewhysComponent } from './componentes/hys/newhys/newhys.component';
import { EdithysComponent } from './componentes/hys/edithys/edithys.component';
import { RegistrarseComponent } from './componentes/registrarse/registrarse.component';

@NgModule({
  declarations: [

    AppComponent,
    EncabezadoComponent,
    AcercademiComponent,
    ExperienciaLaboralComponent,
    FormacionAcademicaComponent,
    IdiomasComponent,
    ContactoComponent,
    LogoComponent,
    LoginComponent,
    HomeComponent,
    NewExperienciaComponent,
    EditarExperienciaComponent,
    NewEducacionComponent,
    EditarEducacionComponent,
    BannerComponent,
    HysComponent,
    NewhysComponent,
    EdithysComponent,
    RegistrarseComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    NgCircleProgressModule.forRoot({radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,}),
    HttpClientModule
  ],
  providers: [
    InterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
