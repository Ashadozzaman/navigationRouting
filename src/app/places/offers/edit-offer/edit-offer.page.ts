import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit,OnDestroy {
  place:Place;
  form:FormGroup;
  private placeSubscription:Subscription;
  constructor(
    private route:ActivatedRoute,
    private placesServices:PlacesService,
    private navCtrl:NavController,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.has('id')){
        this.navCtrl.navigateBack('/place/tabs/offers');
      }
      this.placeSubscription = this.placesServices.getPlaces(paramMap.get('id')).subscribe(place => {
        this.place = place; 
        this.form  = new FormGroup({
          title: new FormControl(this.place.title,{
            updateOn:'blur',
            validators:[Validators.required]
          }),
          description: new FormControl(this.place.description,{
            updateOn:'blur',
            validators:[Validators.required,Validators.max(180)]
          }),
          price: new FormControl(this.place.price,{
            updateOn:'blur',
            validators:[Validators.required]
          }),
        })
      }) 
    })
  }

  editOfferData(){
    if(!this.form.valid){
      return;
    }
    console.log(this.form);
  }
  ngOnDestroy(){
    if(this.placeSubscription){
      this.placeSubscription.unsubscribe();
    }
  }

}
