import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { SegmentChangeEventDetail } from '@ionic/core';
import { Subscription } from 'rxjs';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit,OnDestroy {
  loadPlaces: Place[];
  ListedloadPlaces: Place[];
  private placeSubscription:Subscription;
  constructor(private placesServices:PlacesService,private menuCtrl:MenuController) { }

  ngOnInit() {
    this.placesServices.places.subscribe(places => {
      this.ListedloadPlaces = places;
      this.ListedloadPlaces=this.loadPlaces.slice(1);
    })
    // this.loadPlaces=this.placesServices.places;
    // this.ListedloadPlaces=this.loadPlaces.slice(1);
  }

  onOpenButton(){
    this.menuCtrl.toggle();
  }

  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>){
    console.log(event.detail);
  }
  ngOnDestroy(){
    if(this.placeSubscription){
      this.placeSubscription.unsubscribe();
    }
  }

}
