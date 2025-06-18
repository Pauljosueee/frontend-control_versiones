import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonMenuButton,
  IonButton,
  IonInput
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { HeaderLayoutComponent } from 'src/app/layout/header-layout/header-layout.component';

@Component({
  selector: 'app-proveedores',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonMenuButton,
    IonButton,
    IonInput
    HeaderLayoutComponent,
  ],
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.scss']
})
export class ProveedoresComponent implements OnInit {
  proveedores: any[] = [];
  // Para el formulario
  proveedorForm = { id: null, nombre: '' };
  editando = false;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.cargarProveedores();
  }

  cargarProveedores() {
    this.apiService.getProveedores().subscribe(data => {
      this.proveedores = data;
    });
  }

  abrirFormularioNuevo() {
    this.editando = false;
    this.proveedorForm = { id: null, nombre: '' };
  }

  abrirFormularioEditar(prov: any) {
    this.editando = true;
    this.proveedorForm = { id: prov.id, nombre: prov.nombre };
  }

  guardarProveedor() {
    if (this.editando && this.proveedorForm.id !== null) {
      this.apiService.updateProveedor(this.proveedorForm.id, { nombre: this.proveedorForm.nombre }).subscribe(() => {
        this.cargarProveedores();
        this.abrirFormularioNuevo();
      });
    } else {
      this.apiService.createProveedor({ nombre: this.proveedorForm.nombre }).subscribe(() => {
        this.cargarProveedores();
        this.abrirFormularioNuevo();
      });
    }
  }

  eliminarProveedor(id: number) {
    if (confirm('¿Seguro que deseas eliminar este proveedor?')) {
      this.apiService.deleteProveedor(id).subscribe(() => {
        this.cargarProveedores();
      });
    }
  }
}