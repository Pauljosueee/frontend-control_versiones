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
  selector: 'app-versiones',
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
        <ion-title>Versiones</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item *ngFor="let ver of versiones">
          {{ ver.descripcion }}
        </ion-item>
      </ion-list>
    </ion-content>
  `
})
export class VersionesPage implements OnInit {
  versiones: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getVersiones().subscribe(data => {
      this.versiones = data;
    });
  }
}