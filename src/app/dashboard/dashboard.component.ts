import { Component } from '@angular/core';
import { Hero } from '../hero-interface';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  heroes?: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.heroService.getHeroes()
    .subscribe((heroes) => this.heroes = heroes.slice(1, 5));
  }
}
