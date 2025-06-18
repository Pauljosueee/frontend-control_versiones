import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonMenuButton
} from '@ionic/angular/standalone';
import { ApiService } from '../../services/api.service';
import { HeaderLayoutComponent } from 'src/app/layout/header-layout/header-layout.component';

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
    IonItem,
    IonMenuButton,
    HeaderLayoutComponent,
  ],
  templateUrl: './versiones.component.html',
  styleUrls: ['./versiones.component.scss']
})
export class VersionesComponent implements OnInit {
  versiones: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getVersiones().subscribe(data => {
      this.versiones = data;
    });
  }
}