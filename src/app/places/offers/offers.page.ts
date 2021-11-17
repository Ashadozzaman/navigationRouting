import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonItemSliding } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit,OnDestroy {
  offers: Place[];
  private placeSubscription:Subscription;
  constructor(private placeSevice:PlacesService,private route:Router) { }

  ngOnInit() {
    this.placeSubscription = this.placeSevice.places.subscribe(places => {
      this.offers = places;
    })
    // this.offers =  this.placeSevice.places;
    // console.log(this.offers);
  }
  onEdit(offerId:string,sliding:IonItemSliding){
    sliding.close();
    this.route.navigate(['/places/tabs/offers/edit-offer',offerId])
    console.log('Edit'+offerId);

  }
  ngOnDestroy(){
    if(this.placeSubscription){
      this.placeSubscription.unsubscribe();
    }
  }

}
