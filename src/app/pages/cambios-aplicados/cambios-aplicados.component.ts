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
  templateUrl: './cambios-aplicados.component.html',
  styleUrls: ['./cambios-aplicados.component.scss']
})
export class CambiosAplicadosComponent implements OnInit {
  cambios: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getCambiosAplicados().subscribe(data => {
      this.cambios = data;
    });
  }
}

