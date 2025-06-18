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
  IonInput,
  IonModal, IonButtons } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { HeaderLayoutComponent } from 'src/app/layout/header-layout/header-layout.component';

@Component({
  selector: 'app-proveedores',
  standalone: true,
  imports: [IonButtons, 
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
    IonInput,
    IonModal,
    HeaderLayoutComponent
  ],
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.scss']
})
export class ProveedoresComponent implements OnInit {
  proveedores: any[] = [];
  proveedorForm = { id: null, nombre: '' };
  editando = false;
  mostrarModal = false;

  constructor(private apiService: ApiService) {}

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
    this.mostrarModal = true;
  }

  abrirFormularioEditar(prov: any) {
    this.editando = true;
    this.proveedorForm = { id: prov.id, nombre: prov.nombre };
    this.mostrarModal = true;
  }

  cerrarModal() {
    this.mostrarModal = false;
  }

  guardarProveedor() {
    if (!this.proveedorForm.nombre.trim()) {
      alert('El nombre es requerido');
      return;
    }

    const payload = { nombre: this.proveedorForm.nombre };

    if (this.editando && this.proveedorForm.id !== null) {
      this.apiService.updateProveedor(this.proveedorForm.id, payload).subscribe(() => {
        this.cargarProveedores();
        this.cerrarModal();
      });
    } else {
      this.apiService.createProveedor(payload).subscribe(() => {
        this.cargarProveedores();
        this.cerrarModal();
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
