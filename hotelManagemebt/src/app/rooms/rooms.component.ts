import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import room from './rooms';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent {
    title = "Shera"
    noOfRooms = room.length
    hideRooms = false
    roomList = room
    available = true

    countOfRooms() {
      //throw new Error('Method not implemented.');
      this.hideRooms = !this.hideRooms;
    }

    //ngOnInit() : void{}
}
