import { Input, Component } from '@angular/core';
import { Hero } from '../hero-interface';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  hero?: Hero;

  constructor(
    private heroService: HeroService, 
    private route: ActivatedRoute, 
    private location: Location
  ) { }

  ngOnInit() {
    this.getHero();
  }

  getHero() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe((hero) => this.hero = hero);
  }

  goBack() {
    this.location.back();
  }

}
