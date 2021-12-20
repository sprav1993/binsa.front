import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import {MatDialog, MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ClientePopUpComponent} from './cliente-pop-up/cliente-pop-up.component'
//import { deflateRawSync } from 'zlib';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  listClientes:Cliente[]=[]; 
  
  displayedColumns: string[] = ['id_Cliente', 'nombre', 'domicilio', 'poblacion','codigoPostal','acciones'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _clienteService:ClienteService, private _snackBar:MatSnackBar ,  public dialog: MatDialog,
    ) { }

  ngOnInit(): void {
    this.cargarClientes();
    //this._clienteService.ListarClientes().subscribe(data=>console.log("entro mostrar data",data))
  }
 
  cargarClientes(){
    //this.listClientes=this._clienteService.ListarClientes();
     this._clienteService.ListarClientes().subscribe(
        s => {
          this.listClientes = s;
          //this.listClientes.push(s as unknown as Cliente);
          this.dataSource=new MatTableDataSource(this.listClientes)
          

        },
        e => {
          console.log(e);
        }
      );
      this._clienteService.ListarClientes();
      this.dataSource=new MatTableDataSource(this.listClientes)
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  
   eliminarCliente(element:any){
     console.log(element);
    //this._clienteService.eliminarCliente(element.id_Cliente);
    this._clienteService.eliminarCliente(element.id_Cliente).subscribe(s=>this.cargarClientes());

    

    this._snackBar.open('El usuario fue eliminado con éxito','',{
      duration:1500,
      horizontalPosition:'center',
      verticalPosition:'bottom',
    })
   
  }

   popUpActualizarClienteT(row:any){
    console.log("PopUpDataa",row)

    this.dialog.open(ClientePopUpComponent, {
      data: row
    }).afterClosed().subscribe(res => {
      
       this.cargarClientes();
    });
  }
  popUpActualizarCliente(row:any){
    const dialogConfig= new MatDialogConfig();
    //dialogConfig.disableClose=true;
    dialogConfig.width="80%";
    //console.log("PopUpDataa",row)

    this.dialog.open(ClientePopUpComponent,dialogConfig).afterClosed().subscribe(res => {
      
       this.cargarClientes();
    });
  }
}
