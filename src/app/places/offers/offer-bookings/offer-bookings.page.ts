import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit,OnDestroy {
  place:Place;
  private placeSubscription:Subscription;
  constructor(
    private router:ActivatedRoute, //it's use for get all data for edit
    private navCtrl:NavController,
    private placesServices:PlacesService,
  ) { }

  ngOnInit() {
    this.router.paramMap.subscribe(paramMap => {
      if(!paramMap.has('id')){
        this.navCtrl.navigateBack('/places/tabs/offers');
        return;
      }
      this.placeSubscription = this.placesServices.getPlaces(paramMap.get('id')).subscribe(place => {
        this.place = place;
      })
      // this.place = this.placesServices.places.find(
      //   p => p.id === paramMap.get('id');
      // )
    })
  }

  ngOnDestroy(){
    if(this.placeSubscription){
      this.placeSubscription.unsubscribe();
    }
  }

}
