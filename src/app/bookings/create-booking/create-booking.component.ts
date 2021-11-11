import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Mode } from '@ionic/core';
import { Place } from '../../places/place.model';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
  @Input() selectedPlace:Place;
  @Input() selectedMode:'select' | 'random';
  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {
    const availableFrom = new Date(this.selectedPlace.availableFrom);
    const availableTo = new Date(this.selectedPlace.availableTo);
  }

  onCancel(){
    this.modalCtrl.dismiss(null,'cancel');
    
  }

  onBookPlace(){
    this.modalCtrl.dismiss({message:'This is dummy message!'},'confirm')
  }

}
