import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-badge',
  templateUrl: './hero-badge.component.html',
  standalone: true,
})
export class HeroBadgeComponent {
  @Input() heroId!: number;
  @Input() index!: number;
}
