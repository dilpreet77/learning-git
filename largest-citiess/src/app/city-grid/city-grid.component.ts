import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Cities } from '../model/cities';
import { CityState, getCities } from '../store/cities.reducer';

@Component({
  selector: 'app-city-grid',
  templateUrl: './city-grid.component.html',
  styleUrls: ['./city-grid.component.css'],
})
export class CityGridComponent implements OnInit {
 
    // Get data through by observable from reducer
    cities!: Observable<Cities[]>;
    // By observable and after subscribing get data from observable and put into lists
    cityLists: Cities[] = [];

  constructor(private store: Store<{ city: CityState }>) {
     // user observable select the data from reducer
     this.cities = this.store.select(getCities);
  }

  ngOnInit(): void {
    this.cities.subscribe(data => {
      console.log('data', data);
      this.cityLists = data;
    })
  }

  onChange(event: any) {
    let bigPopulation = this.cityLists.filter(
      (city) => city.Population >= event.value
    );
    this.cityLists = bigPopulation;
  }
}
