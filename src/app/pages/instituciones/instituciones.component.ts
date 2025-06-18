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
  selector: 'app-instituciones',
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
  templateUrl: './instituciones.component.html',
  styleUrls: ['./instituciones.component.scss']
})
export class InstitucionesComponent implements OnInit {
  instituciones: any[] = [];
  institucionForm = { id: null, nombre: '', fecha_contrato: '' };
  editando = false;
  mostrarModal = false;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.cargarInstituciones();
  }

  cargarInstituciones() {
    this.apiService.getInstituciones().subscribe(data => {
      this.instituciones = data;
    });
  }

  abrirFormularioNuevo() {
    this.editando = false;
    this.institucionForm = { id: null, nombre: '', fecha_contrato: '' };
    this.mostrarModal = true;
  }

  abrirFormularioEditar(inst: any) {
    this.editando = true;
    this.institucionForm = {
      id: inst.id,
      nombre: inst.nombre,
      fecha_contrato: inst.fecha_contrato ? inst.fecha_contrato.substring(0, 10) : ''
    };
    this.mostrarModal = true;
  }

  cerrarModal() {
    this.mostrarModal = false;
  }

  guardarInstitucion() {
    const fecha = new Date(this.institucionForm.fecha_contrato);

    if (isNaN(fecha.getTime())) {
      alert('Fecha inválida');
      return;
    }

    const payload = {
      nombre: this.institucionForm.nombre,
      fecha_contrato: fecha.toISOString(),
      proveedor: 1 // puedes ajustar esto según tu lógica
    };

    if (this.editando && this.institucionForm.id !== null) {
      this.apiService.updateInstitucion(this.institucionForm.id, payload).subscribe(() => {
        this.cargarInstituciones();
        this.cerrarModal();
      });
    } else {
      this.apiService.createInstitucion(payload).subscribe(() => {
        this.cargarInstituciones();
        this.cerrarModal();
      });
    }
  }

  eliminarInstitucion(id: number) {
    if (confirm('¿Seguro que deseas eliminar esta institución?')) {
      this.apiService.deleteInstitucion(id).subscribe(() => {
        this.cargarInstituciones();
      });
    }
  }
}
