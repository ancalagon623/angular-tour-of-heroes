import { Injectable } from '@angular/core';
import { Hero } from './hero-interface';
import { HEROES } from './data/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes';

  constructor(private http: HttpClient, private messageService: MessageService) { }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  getHero(id: number) {
    const hero = of(HEROES.find((hero) => hero.id === id));
    this.log(`Fetched hero of id: ${id}`);
    return hero;
  }
}
