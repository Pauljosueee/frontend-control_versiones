import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-header-layout',
  standalone: true,
  imports: [IonicModule],
  templateUrl: './header-layout.component.html',
  styleUrls: ['./header-layout.component.scss'],
})
export class HeaderLayoutComponent implements OnInit {
  @Input() title: string = '';

  constructor() { }

  ngOnInit() { }

}
