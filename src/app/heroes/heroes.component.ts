import { Component } from '@angular/core';
import { Hero } from '../hero-interface';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

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
  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  getHeroes() {
    this.heroService.getHeroes()
      .subscribe((heroes) => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }
}
