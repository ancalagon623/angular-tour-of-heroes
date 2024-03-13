import { Component } from '@angular/core';
import { Hero } from '../hero-interface';
import { HEROES } from '../data/mock-heroes';

@Component({
  // standalone: true,
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  // imports: [
  //   NgFor
  // ]
})
export class HeroesComponent {
  selectedHero?: Hero;
  heroes = HEROES;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
