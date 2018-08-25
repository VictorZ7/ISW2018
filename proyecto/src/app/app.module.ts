import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
//Forms para el ngModel
import { FormsModule } from '@angular/forms';
import { ModificarComponent } from './modificar/modificar.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { TestService } from './test.service';
import { UserService } from './user.service';
import { AuthenticationService} from './_services/authentication.service';
import { AuthGuard } from './_guards/auth.guard';
import { ServiciosComponent } from './servicios/servicios.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { BodegueroComponent } from './Bodeguero/Bodeguero.component';
import { EncargadoBodegaComponent } from './EncargadoBodega/EncargadoBodega.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    LoginComponent,
    ServiciosComponent,
    AdministradorComponent,
    ModificarComponent,
    BodegueroComponent,
    EncargadoBodegaComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AppRoutingModule,
	  FormsModule
  ],
  providers: [TestService, UserService, AuthGuard, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
