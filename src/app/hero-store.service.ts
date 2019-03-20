import { HeroService } from './hero.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class HeroStoreService {
  private heroesSubject = new BehaviorSubject<Hero[]>([]);

  public readonly heroes = this.heroesSubject.asObservable();

  constructor(private heroService: HeroService) {
    this.fetchHeroes();
  }

  private fetchHeroes() {
    this.heroService.getHeroes().subscribe(heroes => this.heroesSubject.next(heroes));
  }

  /*  addHero(name: string) {
     this.heroService.addHero({ name } as Hero)
       .pipe(
         switchMap(_ => this.heroService.getHeroes())
       )
       .subscribe(heroes => {
         console.log('Hero list updated', heroes);
         this.heroesSubject.next(heroes);
       });
   } */

  addHero(name: string) {
    this.heroService.addHero({ name } as Hero)
      .subscribe((hero: Hero) => {
        const outdatedHeroes = this.heroesSubject.getValue();
        this.heroesSubject.next([...outdatedHeroes, hero]);
      });
  }

  /* deleteHero(hero: Hero) {
    this.heroService.deleteHero(hero).pipe(
      switchMap(_ => this.heroService.getHeroes())
    ).subscribe(heroes => {
      this.heroesSubject.next(heroes);
    });
  } */

  deleteHero(hero: Hero) {
    this.heroService.deleteHero(hero).subscribe(_ => {
      const outdatedHeroes = this.heroesSubject.getValue();
      this.heroesSubject.next(outdatedHeroes.filter(h => h.id !== hero.id));
    });
  }
}
