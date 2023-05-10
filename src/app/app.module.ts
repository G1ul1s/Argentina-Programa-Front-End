import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HysComponent } from './componentes/hys/hys.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { FooterComponent } from './componentes/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    EducacionComponent,
    EncabezadoComponent,
    ExperienciaComponent,
    HysComponent,
    IniciarSesionComponent,
    PortfolioComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  /* providers: [PorfolioService,
   {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}],*/
  bootstrap: [AppComponent]
})
export class AppModule { }
