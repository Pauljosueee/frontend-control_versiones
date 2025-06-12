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
  selector: 'app-cambios-aplicados',
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
        <ion-title>Cambios Aplicados</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item *ngFor="let cambio of cambios">
          {{ cambio.fecha_act | date }} - {{ cambio.observaciones }}
        </ion-item>
      </ion-list>
    </ion-content>
  `
})
export class CambiosAplicadosPage implements OnInit {
  cambios: any[] = [];

  constructor(private apiService: ApiService) {}

ngOnInit() {
  this.apiService.getCambiosAplicados().subscribe(data => {
    console.log('Respuesta del backend:', data); // <-- Este log
    this.cambios = data;
  }, error => {
    console.error('Error al conectar con el backend:', error); // <-- Este log
  });
}
}