import { ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { Hero } from './../Services/hero';
import { Component, OnInit, OnDestroy } from "@angular/core";
import { HeroService } from '../Services/hero.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-herolist',
    templateUrl: './herolist.component.html',
    styleUrls: ['./herolist.component.css']
})

export class HeroListComponent implements OnInit, OnDestroy {
    selectedHero: Hero;
    heroes: Observable<Hero[]>;
    // heroes: Hero[];
    selectedId: number;
    counter: number;

    constructor(private heroService: HeroService, private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.getHeroes();
    }

    getHeroes() {
        // this.heroService.getHeroes().subscribe(heroes => {
        //     this.heroes = heroes;
        // })
        this.heroes = this.route.paramMap.switchMap((params: ParamMap) =>{
            this.selectedId = +params.get('id');
            return this.heroService.getHeroes();
        })

    }

    onSelect(hero: Hero) {
        this.selectedHero = hero;
        this.selectedId = hero.id;
    }

    ngOnDestroy() {
        console.log("Destroyed");
    }

    increment() {
        this.counter = 100;
    }

}