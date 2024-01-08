import { Component } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Observable } from 'rxjs';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeroBadgeComponent } from '../hero-badge/hero-badge.component';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  standalone: true,
  imports: [NgForOf, AsyncPipe, RouterLink, HeroBadgeComponent, NgIf],
})
export class HeroesComponent {
  heroes$: Observable<Hero[]> = this.heroService.getHeroes();

  constructor(private heroService: HeroService) {}
}
