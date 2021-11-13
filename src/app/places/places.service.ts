import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
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
      144.99,
      new Date('2020-11-10'),
      new Date('2021-11-20'),
      'u1',
    ),
    new Place(
      'p2',
      'Parice Mantion',
      'A romantic place in parice',
      'https://static.toiimg.com/photo/38602945/.jpg',
      244.99,
      new Date('2020-11-10'),
      new Date('2021-11-20'),
      'u1',
    ),
    new Place(
      'p3',
      'Cox bazar',
      'Bangladesh Best place',
      'https://youimg1.tripcdn.com/target/100k0z000000npo6pD12B_D_1180_558.jpg',
      159.99,
      new Date('2020-11-10'),
      new Date('2021-11-20'),
      'u1',
    ),
    new Place(
      'p4',
      'Sajek',
      'Bangladesh Best place in Rangamati',
      'https://cdn.shopify.com/s/files/1/0022/2537/3254/files/ebadur-rehman-kaium-NBwzhqyT7Jw-unsplash_1024x1024.jpg?v=1599544253',
      159.99,
      new Date('2020-11-10'),
      new Date('2021-11-20'),
      'u1',
    ),
    new Place(
      'p5',
      'Saint Martin',
      'Bangladesh Best place in Saint Martin',
      'http://bdtourism.website/wp-content/uploads/2019/07/BD-st-martin.jpeg',
      400.99,
      new Date('2020-11-10'),
      new Date('2021-11-20'),
      'u1',
    ),
  ];
  get places(){
    return [...this._places];
  }
  constructor(private authService:AuthService) { }

  getPlaces(id:string){
    return{...this._places.find(p=> p.id === id)};
  }
  addPlace(title:string,description:string,price:number,availableFrom:Date,availableTo:Date){
    const newPlace = new Place(
      Math.random().toString(),
      title,
      description,
      'http://bdtourism.website/wp-content/uploads/2019/07/BD-st-martin.jpeg',
      price,
      availableFrom,
      availableTo,
      this.authService.userId
    );
    this._places.push(newPlace);
  }
}
