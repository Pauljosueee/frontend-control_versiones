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
  selector: 'app-versiones',
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
  templateUrl: './versiones.component.html',
  styleUrls: ['./versiones.component.scss']
})
export class VersionesComponent implements OnInit {
  versiones: any[] = [];
  versionForm = { id: null, descripcion: '' };
  editando = false;
  mostrarModal = false;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.cargarVersiones();
  }

  cargarVersiones() {
    this.apiService.getVersiones().subscribe(data => {
      this.versiones = data;
    });
  }

  abrirFormularioNuevo() {
    this.editando = false;
    this.versionForm = { id: null, descripcion: '' };
    this.mostrarModal = true;
  }

  abrirFormularioEditar(ver: any) {
    this.editando = true;
    this.versionForm = { id: ver.id, descripcion: ver.descripcion };
    this.mostrarModal = true;
  }

  cerrarModal() {
    this.mostrarModal = false;
  }

  guardarVersion() {
    if (!this.versionForm.descripcion.trim()) {
      alert('La descripción es requerida');
      return;
    }

    const payload = { descripcion: this.versionForm.descripcion };

    if (this.editando && this.versionForm.id !== null) {
      this.apiService.updateVersion(this.versionForm.id, payload).subscribe(() => {
        this.cargarVersiones();
        this.cerrarModal();
      });
    } else {
      this.apiService.createVersion(payload).subscribe(() => {
        this.cargarVersiones();
        this.cerrarModal();
      });
    }
  }

  eliminarVersion(id: number) {
    if (confirm('¿Seguro que deseas eliminar esta versión?')) {
      this.apiService.deleteVersion(id).subscribe(() => {
        this.cargarVersiones();
      });
    }
  }
}
