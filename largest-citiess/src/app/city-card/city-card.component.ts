import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Cities } from '../model/cities';
import { growPopulation, removePopulation } from '../store/cities.actions';
import { CityState, getCities } from '../store/cities.reducer';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.css'],
})
export class CityCardComponent implements OnInit {

  // Input Decorator
  @Input() city: any;

  // cities: Cities[] = [];
   cities!: Observable<Cities[]>;
  cityLists: Cities[] = [];


  // Button disabled boolean
  isDisabled = false;

  constructor( private store: Store<{ city: CityState }>) {
    // this.store.pipe(select(state => state.city.cities)).subscribe(response => {
    //   this.cities = response;
    //   this.cityLists = response;
    // });
    this.cities = this.store.select(getCities);
  }

  ngOnInit(): void {
    this.cities.subscribe( res => {
      this.cityLists = res;
    })
  }

  // Grow Population
  growPopulation() {
    this.store.dispatch(growPopulation({ data: this.city }));
  }

  // Remove Population
  removePopulation(CityName: any) {
    // let removePopulations = this.cityLists.filter(cityObject => {
    //     if(cityObject.CityName === city.CityName){
    //       cityObject.Population = cityObject.Population - 5000000;
    //     }
    //     //return cityObject;
    //   }
    // );
    // console.log(removePopulations);
    // console.log(CityName);
    this.store.dispatch(removePopulation({ data: CityName }));
    this.isDisabled = true;

    // if (this.city.CityName == this.city.CityName) {
    //   this.city.Population = this.city.Population - 5000000;
    //   //Disabled button on less than 5 million
    //   if (this.city.Population < 5000000) {

    //   }
    // }
  }
}