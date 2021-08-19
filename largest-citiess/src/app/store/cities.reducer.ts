import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { Cities } from '../model/cities';
import { growPopulation, removePopulation } from './cities.actions';

export interface CityState {
  cities: Cities[];
}

export const initialState: CityState = {
  cities: [
    {
      CityName: 'Shanghai',
      CityImage:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/PudongSkyline-pjt_%28cropped%29.jpg/125px-PudongSkyline-pjt_%28cropped%29.jpg',
      Nation: 'China',
      NationFlag:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/23px-Flag_of_the_People%27s_Republic_of_China.svg.png',
      Population: 24183300,
      Description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    },
    {
      CityName: 'Beijing',
      CityImage:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/View_of_Beijing.jpg/125px-View_of_Beijing.jpg',
      Nation: 'China',
      NationFlag:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/23px-Flag_of_the_People%27s_Republic_of_China.svg.png',
      Population: 21707000,
      Description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    },
    {
      CityName: 'Lagos',
      CityImage:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Lagos_Island.jpg/125px-Lagos_Island.jpg',
      Nation: 'Nigeria',
      NationFlag:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_Nigeria.svg/23px-Flag_of_Nigeria.svg.png',
      Population: 16060303,
      Description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    },
    {
      CityName: 'Istanbul',
      CityImage:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Halic.png/125px-Halic.png',
      Nation: 'Turkey',
      NationFlag:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/23px-Flag_of_Turkey.svg.png',
      Population: 15029231,
      Description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    },
    {
      CityName: 'Shanghai',
      CityImage:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/PudongSkyline-pjt_%28cropped%29.jpg/125px-PudongSkyline-pjt_%28cropped%29.jpg',
      Nation: 'China',
      NationFlag:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/23px-Flag_of_the_People%27s_Republic_of_China.svg.png',
      Population: 24183300,
      Description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    },
    {
      CityName: 'Guanzghou',
      CityImage:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Guangzhou_skyline.jpg/125px-Guangzhou_skyline.jpg',
      Nation: 'China',
      NationFlag:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/23px-Flag_of_the_People%27s_Republic_of_China.svg.png',
      Population: 13081000,
      Description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    },
    {
      CityName: 'Shenzhen',
      CityImage:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Shenzhen_CBD_and_River.jpg/125px-Shenzhen_CBD_and_River.jpg',
      Nation: 'China',
      NationFlag:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/23px-Flag_of_the_People%27s_Republic_of_China.svg.png',
      Population: 125283000,
      Description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    },
    {
      CityName: 'Mumbai',
      CityImage:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Mumbai_Downtown.jpg/125px-Mumbai_Downtown.jpg',
      Nation: 'India',
      NationFlag:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/23px-Flag_of_India.svg.png',
      Population: 12442373,
      Description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    },
    {
      CityName: 'Moscow',
      CityImage:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Moscow-City_%2836211143494%29.jpg/125px-Moscow-City_%2836211143494%29.jpg',
      Nation: 'Russia',
      NationFlag:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/23px-Flag_of_Russia.svg.png',
      Population: 30000000,
      Description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    },
    {
      CityName: 'São Paulo',
      CityImage:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/MarginalPinheiros.jpg/125px-MarginalPinheiros.jpg',
      Nation: 'Brazil',
      NationFlag:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/22px-Flag_of_Brazil.svg.png',
      Population: 20000000,
      Description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    },
  ],
};

export const _cityReducer = createReducer(
  initialState,
  on(growPopulation, (state, { data }) => {
    return state;
  }),
  on(removePopulation, (state, { data }) => {
    // let allCities = state.cities;
    // const newStateCopy = {...state}
    // allCities.forEach(cityObject => {
    //     if(cityObject.CityName === data.CityName) {
    //         cityObject.Population -= 50000000;
    //     }
    //     return newStateCopy;
    // })
    // console.log('remove',data);
    // return Object.assign({}, state, { cities: allCities });

    const newStateCopy = { ...state };
    const newUserObjectCopy = [...newStateCopy.cities, data];
    newStateCopy.cities = newUserObjectCopy;
    console.log(newStateCopy);
    newUserObjectCopy.forEach((res) => {
      res.Population = res.Population - 500000;
    });
    return newStateCopy;
  })
);

export function cityReducer(state = initialState, action: any) {
  return _cityReducer(state, action);
}

export const getCityState = createFeatureSelector<CityState>('city');

export const getCities = createSelector(
  getCityState,
  (state: CityState) => state.cities
);
