import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem
} from '@ionic/angular/standalone';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-instituciones',
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem
  ],
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Instituciones</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item *ngFor="let inst of instituciones">
          {{ inst.nombre }} - {{ inst.fecha_contrato | date }}
        </ion-item>
      </ion-list>
    </ion-content>
  `
})
export class InstitucionesPage implements OnInit {
  instituciones: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getInstituciones().subscribe(data => {
      this.instituciones = data;
    });
  }
}