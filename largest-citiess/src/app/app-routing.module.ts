import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityCardComponent } from './city-card/city-card.component';
import { CityGridComponent } from './city-grid/city-grid.component';

const routes: Routes = [
  {
    path:'', component:CityGridComponent, pathMatch:'full'
  },
  {
    path:'city-card', component:CityCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
