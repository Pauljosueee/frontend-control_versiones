import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [IonicModule, RouterModule, CommonModule],
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent implements OnInit {

  appPages = [
    { title: 'Proveedores', url: '/proveedores', icon: 'people' },
    { title: 'Instituciones', url: '/instituciones', icon: 'business' },
    { title: 'Versiones', url: '/versiones', icon: 'git-branch' },
    // { title: 'Versiones', url: '/hola', icon: 'git-branch' },
  ];

  constructor() { }

  ngOnInit() { }

}
