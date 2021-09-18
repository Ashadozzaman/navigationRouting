import { Component, OnInit } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
import { Booking } from './booking.model';
import { BookingService } from './booking.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
  loadedbooking:Booking[];
  constructor(public bookingService:BookingService) { }

  ngOnInit() {
    this.loadedbooking = this.bookingService.bookings;
  }

  onCancelBooking(offerId:string,slidingEl:IonItemSliding){
    slidingEl.close();
    //here delete the item
  }

}
