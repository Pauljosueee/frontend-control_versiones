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
  selector: 'app-detalle',
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
        <ion-title>Detalle</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item *ngFor="let det of detalles">
          {{ det.texto }}
        </ion-item>
      </ion-list>
    </ion-content>
  `
})
export class DetallePage implements OnInit {
  detalles: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getDetalles().subscribe(data => {
      this.detalles = data;
    });
  }
}