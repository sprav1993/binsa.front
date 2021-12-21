import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Contacto } from 'src/app/interfaces/contacto';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-crear-contacto',
  templateUrl: './crear-contacto.component.html',
  styleUrls: ['./crear-contacto.component.css'],
})
export class CrearContactoComponent implements OnInit {
  sexo: any[] = ['Masculino', 'Femenino'];
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private _contactoService: ContactoService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.form = this.fb.group({
      id_Cliente: ['', Validators.required],
      nombre: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  ngOnInit(): void {}
  agregarCliente() {
    console.log(this.form);

    const user: Contacto = {
      id_Cliente: this.form.value.id,
      nombre: this.form.value.nombre,
      telefono: this.form.value.domicilio,
      email: this.form.value.codigoPostal,
    };
    console.log(user);
    this._contactoService
      .agregarContacto(user)
      .subscribe((s) => console.log('S de Suscr Add', s));
    this.router.navigate(['./dashboard/clientes']);
    this._snackBar.open('El contacto fue agregado con éxito', '', {
      duration: 20000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
}
