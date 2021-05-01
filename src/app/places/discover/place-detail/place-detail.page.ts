import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place:Place;
  constructor(
    private route:ActivatedRoute,
    private placesServices:PlacesService,
    private navCtrl:NavController,
    
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.has('id')){
        this.navCtrl.navigateBack('places/tabs/discover');
        return;
      }
      this.place = this.placesServices.getPlaces(paramMap.get('id'));
    })
  }
  onBookPlace(){
    // this.router.navigateByUrl('/places/tabs/discover'); //angular navigation process
    // this.navCtrl.pop(); //nav back
    this.navCtrl.navigateBack('/places/tabs/discover');
  }

}
