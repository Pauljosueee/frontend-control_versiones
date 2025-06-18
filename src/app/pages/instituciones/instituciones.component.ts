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

@Component({
  selector: 'app-instituciones',
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
  ],
  templateUrl: './instituciones.component.html',
  styleUrls: ['./instituciones.component.scss']
})
export class InstitucionesComponent implements OnInit {
  instituciones: any[] = [];
  institucionForm = { id: null, nombre: '', fecha_contrato: '' };
  editando = false;

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
  }

  abrirFormularioEditar(inst: any) {
    this.editando = true;
    this.institucionForm = { 
      id: inst.id, 
      nombre: inst.nombre, 
      fecha_contrato: inst.fecha_contrato ? inst.fecha_contrato.substring(0, 10) : '' 
    };
  }

  guardarInstitucion() {
    if (this.editando && this.institucionForm.id !== null) {
      this.apiService.updateInstitucion(this.institucionForm.id, { 
        nombre: this.institucionForm.nombre, 
        fecha_contrato: this.institucionForm.fecha_contrato 
      }).subscribe(() => {
        this.cargarInstituciones();
        this.abrirFormularioNuevo();
      });
    } else {
      this.apiService.createInstitucion({ 
        nombre: this.institucionForm.nombre, 
        fecha_contrato: this.institucionForm.fecha_contrato 
      }).subscribe(() => {
        this.cargarInstituciones();
        this.abrirFormularioNuevo();
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