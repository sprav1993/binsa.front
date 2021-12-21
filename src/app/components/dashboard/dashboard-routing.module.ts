import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { ReportesComponent } from './reportes/reportes.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

import {ClientesComponent} from './clientes/clientes.component';
import{ CrearClienteComponent }from './clientes/crear-cliente/crear-cliente.component';
import {ContactoComponent} from './contacto/contacto.component';

import{ CrearContactoComponent }from './contacto/crear-contacto/crear-contacto.component'

const routes: Routes = [
  {
    path:'',component:DashboardComponent, children:[
      { path:'',component:InicioComponent },
      { path:'usuarios',component:UsuariosComponent },
      { path:'reportes',component:ReportesComponent } ,
      {path:'crear-usuario',component:CrearUsuarioComponent},
      {path:'clientes',component:ClientesComponent},
      {path:'crear-cliente',component:CrearClienteComponent},
      {path:'contacto',component:ContactoComponent},
      {path:'crear-contacto',component:CrearContactoComponent}]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
