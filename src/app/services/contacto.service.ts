import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contacto } from '../interfaces/contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

myAppUrl='https://localhost:44335/';
myApiURl='api/cliente';

rutaApi=this.myAppUrl+this.myApiURl;

  list:Contacto[]=[];

  constructor(private http:HttpClient) { }

   ListarContactos():Observable<Contacto[]>{
    return this.http.get<Contacto[]>(this.myAppUrl+this.myApiURl)

  }

  agregarContacto(user:Contacto):Observable<Contacto>{
  debugger;
  return this.http.post<Contacto>((this.myAppUrl+this.myApiURl),user)

 }

  eliminarClienteT(user:Contacto):Observable<Contacto>{
    return this.http.post<Contacto>((this.myAppUrl+this.myApiURl),user)
  }

  eliminarContacto(id:string):Observable<{}>{
    this.rutaApi=`${this.rutaApi}/${id}`;
    console.log("rutaApiii",this.rutaApi);
    return this.http.delete(this.rutaApi);

  }
  actualizarContacto(user:Contacto):Observable<Contacto>{
    debugger;
    return this.http.post<Contacto>((this.myAppUrl+this.myApiURl),user)

   }

}
