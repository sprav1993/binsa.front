import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Contacto } from 'src/app/interfaces/contacto';
import { ContactoService } from 'src/app/services/contacto.service';
import {
  MatDialog,
  MatDialogRef,
  MatDialogConfig,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
})
export class ContactoComponent implements OnInit {
  listContactos: Contacto[] = [];

  displayedColumns: string[] = [
    'id_Cliente',
    'nombre',
    'domicilio',
    'poblacion',
    'codigoPostal',
    'acciones',
  ];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _contactoService: ContactoService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.cargarContactos();
  }

  cargarContactos() {
    this._contactoService.ListarContactos().subscribe(
      (s) => {
        this.listContactos = s;
        this.dataSource = new MatTableDataSource(this.listContactos);
      },
      (e) => {
        console.log(e);
      }
    );
    this._contactoService.ListarContactos();
    this.dataSource = new MatTableDataSource(this.listContactos);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarContacto(element: any) {
    console.log(element);
    this._contactoService
      .eliminarContacto(element.id_Cliente)
      .subscribe((s) => this.cargarContactos());
    this._snackBar.open('El usuario fue eliminado con éxito', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

  popUpActualizarContactoT(row: any) {
    // console.log("PopUpDataa",row)
    // this.dialog.open(ClientePopUpComponent, {
    //   data: row
    // }).afterClosed().subscribe(res => {
    //    this.cargarClientes();
    // });
  }
  popUpActualizarContacto(row: any) {
    //   const dialogConfig= new MatDialogConfig();
    //   //dialogConfig.disableClose=true;
    //   dialogConfig.width="80%";
    //   //console.log("PopUpDataa",row)
    //   this.dialog.open(ClientePopUpComponent,dialogConfig).afterClosed().subscribe(res => {
    //      this.cargarClientes();
    //   });
  }
}
