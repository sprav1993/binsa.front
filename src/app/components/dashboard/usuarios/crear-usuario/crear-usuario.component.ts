import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  tiles: any[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
  ];

  foods: any[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
  ];
  sexo:any[]=['Masculino','Femenino'];
  form:FormGroup;  
  constructor(private fb:FormBuilder, 
    private _usuarioService:UsuarioService,
    private router:Router,
    private _snackBar:MatSnackBar,
    ) {
    this.form=this.fb.group({
      usuario:['',Validators.required],
      nombre:['',Validators.required],
      apellido:['',Validators.required],
      sexo:['',Validators.required],

    })
   }

  ngOnInit(): void {
  }
  agregarUsuario(){
   console.log(this.form);
   
   const user:Usuario={
     usuario:this.form.value.usuario,
     nombre:this.form.value.nombre,
     apellido:this.form.value.apellido,
     sexo:this.form.value.sexo,
   }
   console.log(user);
   this._usuarioService.agregarUsuario(user);
   this.router.navigate(['./dashboard/usuarios'])
   
   this._snackBar.open('El usuario fue agregado con éxito','',{
    duration:20000,
    horizontalPosition:'center',
    verticalPosition:'bottom',
  })
  }
 

}
