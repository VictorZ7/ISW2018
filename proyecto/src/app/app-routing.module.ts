import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ModificarComponent } from './modificar/modificar.component';

import { LoginComponent } from './login/login.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { BodegueroComponent } from './Bodeguero/Bodeguero.component';
import { SupervisorComponent } from './supervisor/supervisor.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
	{ path: 'about', component: AboutComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'servicios', component: ServiciosComponent, canActivate: [AuthGuard] },
	{ path: 'administrador', component: AdministradorComponent },
	{ path: 'modificar', component: ModificarComponent },
	{ path: 'Bodeguero', component: BodegueroComponent },
	{ path: 'supervisor', component: SupervisorComponent },
	{ path: '**', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
