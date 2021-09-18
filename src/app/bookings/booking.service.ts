import { Injectable } from "@angular/core";
import { Booking } from "./booking.model";
@Injectable({providedIn: 'root'})
export class BookingService{
    private _bookings:Booking[] = [
        {
            id:'xyz',
            placeId:'p3',
            placeTitle:'Sajek',
            guestNumber: 2,
            userId:'abc'
        }
    ];

    get bookings(){ 
        return [...this._bookings]
    }
    
}