import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-badge',
  templateUrl: './hero-badge.component.html',
})
export class HeroBadgeComponent {
  @Input() heroId!: number;
  @Input() index!: number;
}
