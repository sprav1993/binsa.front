import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Cliente } from '../interfaces/cliente';
import { Contacto } from '../interfaces/contacto';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  //private headers = new Headers({ "Content-Type": "application/json" });
  // private apiUrlObtenerPersonal =
  // this.config.apiUrl + "/api/Cuponera/ListarTransaciones";
  //myAppUrl='http://localhost:32435/';
  myAppUrl='https://localhost:44335/';
  //myAppUrl='http://localhost:24270/';

  myApiURl='api/cliente';

  rutaApi=this.myAppUrl+this.myApiURl;

  list:Cliente[]=[];

  constructor(private http:HttpClient) { }

  //   ListarClientes(){
  //     this.http.get(this.myAppUrl+this.myApiURl).toPromise()
  //     .then(data=>{
  //       this.list=data as Cliente[];
  //     });
  // }
  ListarClientes():Observable<Cliente[]>{
     //return this.http.get<Cliente[]>(this.myApiURl)
    return this.http.get<Cliente[]>(this.myAppUrl+this.myApiURl)

  }

  agregarCliente(user:Cliente):Observable<Cliente>{
    debugger;
    //return this.http.get<Cliente[]>(this.myApiURl)
  // return this.http.post<Cliente[]>((this.myAppUrl+this.myApiURl),cliente)
  return this.http.post<Cliente>((this.myAppUrl+this.myApiURl),user)
 }
  // agregar cliente(cliente:Cliente){
  //   this.listUsuarios.unshift(usuario);
  // }
  eliminarClienteT(user:Cliente):Observable<Cliente>{
    debugger;
    //return this.http.get<Cliente[]>(this.myApiURl)
  // return this.http.post<Cliente[]>((this.myAppUrl+this.myApiURl),cliente)
  return this.http.post<Cliente>((this.myAppUrl+this.myApiURl),user)
  }

  eliminarCliente(id:string):Observable<{}>{
    this.rutaApi=`${this.rutaApi}/${id}`;
    console.log("rutaApiii",this.rutaApi);
    return this.http.delete(this.rutaApi);
  }

  actualizarCliente(user:Cliente):Observable<Cliente>{
    debugger;
  return this.http.post<Cliente>((this.myAppUrl+this.myApiURl),user)
 }




}
