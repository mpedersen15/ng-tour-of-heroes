import { HeroService } from './../hero.service';
import { HEROES } from './../mock-heroes';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent /* implements OnInit */ {

  @Input() heroes: Hero[];

  @Output() heroAdded: EventEmitter<string> = new EventEmitter();
  @Output() heroDeleted: EventEmitter<Hero> = new EventEmitter();

  constructor(/* private heroService: HeroService */) { }

  /*  ngOnInit() {
     this.getHeroes();
   } */

  /* getHeroes() {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  } */

  add(name: string) {
    this.heroAdded.emit(name);
  }

  delete(hero: Hero) {
    this.heroDeleted.emit(hero);
  }

  /* add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  } */

  /* delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  } */
}
