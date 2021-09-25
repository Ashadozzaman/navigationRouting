import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { SegmentChangeEventDetail } from '@ionic/core';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  loadPlaces: Place[];
  ListedloadPlaces: Place[];
  constructor(private placesServices:PlacesService,private menuCtrl:MenuController) { }

  ngOnInit() {
    this.loadPlaces=this.placesServices.places;
    this.ListedloadPlaces=this.loadPlaces.slice(1);
  }

  onOpenButton(){
    this.menuCtrl.toggle();
  }

  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>){
    console.log(event.detail);
  }

}
