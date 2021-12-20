import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-pop-up',
  templateUrl: './cliente-pop-up.component.html',
  styleUrls: ['./cliente-pop-up.component.css']
})
export class ClientePopUpComponent implements OnInit {

  sexo:any[]=['Masculino','Femenino'];
  form:FormGroup;  
  constructor(private fb:FormBuilder, 
    private _clienteService:ClienteService,
    private router:Router,
    private _snackBar:MatSnackBar,
    ) {
    this.form=this.fb.group({
      //id:['',Validators.required],
      nombre:['',Validators.required],
      domicilio:['',Validators.required],
      codigoPostal:['',Validators.required],
      poblacion:['',Validators.required],
      // sexo:['',Validators.required],
    })
   }

  ngOnInit(): void {

  }
  agregarCliente(){
   console.log(this.form);
   
   const user:Cliente={
     id:this.form.value.id,
     nombre:this.form.value.nombre,
     domicilio:this.form.value.domicilio, 
     codigoPostal:this.form.value.codigoPostal,
     poblacion:this.form.value.poblacion,

     //sexo:this.form.value.sexo,
   }
   console.log(user);
   this._clienteService.agregarCliente(user).subscribe(s=>console.log("S de Suscr Add",s))
   this.router.navigate(['./dashboard/clientes'])
   this._snackBar.open('El usuario fue agregado con éxito','',{
    duration:20000,
    horizontalPosition:'center',
    verticalPosition:'bottom',

  })
  }
 
}
