import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController, ModalController, NavController } from '@ionic/angular';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

import {CreateBookingComponent} from '../../../bookings/create-booking/create-booking.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit ,OnDestroy{
  place:Place;
  private placeSubscription:Subscription;
  constructor(
    private route:ActivatedRoute,
    private placesServices:PlacesService,
    private navCtrl:NavController,
    private modalCtrl:ModalController,
    private actionSheet:ActionSheetController
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.has('id')){
        this.navCtrl.navigateBack('places/tabs/discover');
        return;
      }
      this.placesServices.getPlaces(paramMap.get('id')).subscribe(place => {
        this.place = place;
      })
    })
  }
  onBookPlace(){
    // this.router.navigateByUrl('/places/tabs/discover'); //angular navigation process
    // this.navCtrl.pop(); //nav back
    // this.navCtrl.navigateBack('/places/tabs/discover');
    this.actionSheet.create({
      header:'Choose an action',
      buttons:[
        {
          text:'Select Button',
          handler:()=>{
            this.openBookingModal('select');
          }
        },
        {
          text:'Random date',
          handler:()=>{
            this.openBookingModal('random');
          }
        },
        {
          text:'Cancel',
          role:'cancel'
        },
      ]

    })
    .then(actionSheet => {
      actionSheet.present();
    })
  }

  openBookingModal(mode: 'select' | 'random'){
    console.log(mode);
    this.modalCtrl.create({
      component:CreateBookingComponent,
      componentProps:{selectedPlace:this.place,selectedMode:mode}
    })
    .then(modalEl =>{
      modalEl.present();
      return modalEl.onDidDismiss();
     })
    .then(resultData => {
      console.log(resultData.role,resultData.data);
      if(resultData.role === 'confirm'){
        console.log("Booked");
      }
    });

  }
  ngOnDestroy(){
    if(this.placeSubscription){
      this.placeSubscription.unsubscribe();
    }
  }

}
