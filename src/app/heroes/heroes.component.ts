import { Component, inject } from '@angular/core';

import { Hero } from '../hero';
import { Observable } from 'rxjs';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeroBadgeComponent } from '../hero-badge/hero-badge.component';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  standalone: true,
  imports: [NgForOf, AsyncPipe, RouterLink, HeroBadgeComponent, NgIf],
})
export class HeroesComponent {
  private heroService = inject(HeroService);

  heroes$: Observable<Hero[]> = this.heroService.getHeroes();
}
