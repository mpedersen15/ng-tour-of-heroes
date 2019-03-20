import { HeroStoreService } from './../hero-store.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes-container',
  templateUrl: './heroes-container.component.html',
  styleUrls: ['./heroes-container.component.css']
})
export class HeroesContainerComponent implements OnInit {

  constructor(public heroStoreService: HeroStoreService) { }

  ngOnInit() {
  }

  onHeroAdded(name: string) {
    console.log('Hero added', name);
    this.heroStoreService.addHero(name);
  }

  onHeroDeleted(hero: Hero) {
    console.log('Hero deleted', hero);
    this.heroStoreService.deleteHero(hero);
  }
}
