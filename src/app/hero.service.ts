import { Injectable } from '@angular/core';
import { Hero } from './hero-interface';
import { HEROES } from './data/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id: number) {
    const hero = of(HEROES.find((hero) => hero.id === id));
    this.messageService.add(`Fetched hero of id: ${id}`);
    return hero;
  }
}
