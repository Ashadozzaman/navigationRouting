import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places:Place[] = [
    new Place(
      'p1',
      'Mahantha Mantion',
      'In the heart new work',
      'https://images.pexels.com/photos/1239162/pexels-photo-1239162.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      144.99
    ),
    new Place(
      'p2',
      'Parice Mantion',
      'A romantic place in parice',
      'https://static.toiimg.com/photo/38602945/.jpg',
      244.99
    ),
    new Place(
      'p3',
      'Cox bazar',
      'Bangladesh Best place',
      'https://youimg1.tripcdn.com/target/100k0z000000npo6pD12B_D_1180_558.jpg',
      159.99
    ),
    new Place(
      'p4',
      'Sajek',
      'Bangladesh Best place in Rangamati',
      'https://thetourisminternational.com/wp-content/uploads/2019/12/DTHsbihVoAAB0pO-1200x480.jpg',
      159.99
    ),
    new Place(
      'p5',
      'Saint Martin',
      'Bangladesh Best place in Saint Martin',
      'http://bdtourism.website/wp-content/uploads/2019/07/BD-st-martin.jpeg',
      400.99
    ),
  ];
  get places(){
    return [...this._places];
  }
  constructor() { }

  getPlaces(id:string){
    return{...this._places.find(p=> p.id === id)};
  }
}
