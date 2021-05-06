import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroesService } from './heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
  }
  addHero(newHero: Hero): void {
    this.heroesService
      .addHero(newHero)
      .subscribe(hero => { this.heroes.push(hero as Hero); });
  }
}
