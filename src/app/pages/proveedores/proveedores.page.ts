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
  selector: 'app-proveedores',
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
        <ion-title>Proveedores</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item *ngFor="let prov of proveedores">
          {{ prov.nombre }}
        </ion-item>
      </ion-list>
    </ion-content>
  `
})
export class ProveedoresPage implements OnInit {
  proveedores: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getProveedores().subscribe(data => {
      this.proveedores = data;
    });
  }
}