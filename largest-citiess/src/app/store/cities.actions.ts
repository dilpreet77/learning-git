import { createAction, props } from "@ngrx/store";
import { Cities } from "../model/cities";


export const grow_population = '[CityCard Component], Grow Population';
export const remove_population = '[CityCard Component], Remove Population';


export const growPopulation = createAction(grow_population, props<{ data: Cities }>());
export const removePopulation = createAction(remove_population, props<{ data: Cities }>());


