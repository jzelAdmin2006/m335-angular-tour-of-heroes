import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard[title]',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  title!: string;

  constructor() {}
}
