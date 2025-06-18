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
    IonInput,
    HeaderLayoutComponent
  ],
  templateUrl: './instituciones.component.html',
  styleUrls: ['./instituciones.component.scss']
})
export class InstitucionesComponent implements OnInit {
  instituciones: any[] = [];
  institucionForm = { id: null, nombre: '', fecha_contrato: '' };
  editando = false;

  constructor(private apiService: ApiService) { }

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
    const fecha = new Date(this.institucionForm.fecha_contrato);

    if (isNaN(fecha.getTime())) {
      alert('Fecha inválida');
      return;
    }

    const payload = {
      nombre: this.institucionForm.nombre,
      fecha_contrato: fecha.toISOString(), // ✅ conversión aquí
      proveedor: 1,
    };

    console.log(payload);
    

    if (this.editando && this.institucionForm.id !== null) {
      this.apiService.updateInstitucion(this.institucionForm.id, payload).subscribe(() => {
        this.cargarInstituciones();
        this.abrirFormularioNuevo();
      });
    } else {
      this.apiService.createInstitucion(payload).subscribe(() => {
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