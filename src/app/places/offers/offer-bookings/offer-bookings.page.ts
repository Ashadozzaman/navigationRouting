import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit {
  place:Place;
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
      this.place = this.placesServices.getPlaces(paramMap.get('id'));
      // this.place = this.placesServices.places.find(
      //   p => p.id === paramMap.get('id');
      // )
    })
  }

}
