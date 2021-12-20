import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  listUsuarios: Usuario[] = [
    {usuario: 'binsa', nombre: 'Quico', apellido:'Álvarez ', sexo: 'Masculino'},
    {usuario: 'jperez', nombre: 'Juan', apellido:'Perez', sexo: 'Masculino'},
    {usuario: 'mgomez', nombre: 'Martin', apellido:'Gomez', sexo: 'Masculino'},
    {usuario: 'ngarcia', nombre: 'Nicolas', apellido:'Garcia', sexo: 'Masculino'},
    {usuario: 'jprado', nombre: 'Jacky', apellido:'Prado', sexo: 'Femenino'},
    {usuario: 'mdiaz', nombre: 'Milena', apellido:'Diaz', sexo: 'Femenino'},
    {usuario: 'nsoto', nombre: 'Nadia', apellido:'Soto', sexo: 'Femenino'},

  ];

  constructor() { }

  getUsuario(){
    return this.listUsuarios.slice();
  }
  eliminarUsuario(index:number){
    this.listUsuarios.splice(index,1);
  }
  agregarUsuario(usuario:Usuario){
    this.listUsuarios.unshift(usuario);
  }
}
