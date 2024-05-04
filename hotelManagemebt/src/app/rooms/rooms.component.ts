import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Room} from './rooms';
import { RoomListComponent } from "./room-list/room-list.component";

@Component({
    selector: 'app-rooms',
    standalone: true,
    templateUrl: './rooms.component.html',
    styleUrl: './rooms.component.css',
    imports: [CommonModule, RoomListComponent]
})
export class RoomsComponent implements OnInit{
    title = "Shera"
    noOfRooms = 5
    hideRooms = false
    roomList : Room[] = [ {
        id: 0,
        name: "cozy bedsheet",
        type: "Double",
        price: 50,
        available: true,
        mfd : new Date('2024-04-15'),
        rating : 4.3
    }, {
      id: 1,
      name: "Cozy Bedroom",
      type: "Single",
      price: 50,
      available: true,
      mfd : new Date('2024-04-15'),
      rating : 2.667
    },
    {
      id: 2,
      name: "Cozy Bedroom",
      type: "Single",
      price: 50,
      available: true,
      mfd : new Date('2024-04-15'),
      rating : 2.667
    },
    {
      id: 3,
      name: "Cozy Bedroom",
      type: "Single",
      price: 50,
      available: true,
      mfd : new Date('2024-04-15'),
      rating : 2.667
    }, 
    {
        id: 5,
        name: "Cozy Bedroom",
        type: "Single",
        price: 50,
        available: true,
        mfd : new Date('2024-04-15'),
        rating : 2.667
    }
    ];
    selectedRoom!: RoomListComponent;
    available = true
    
    countOfRooms() {
      //throw new Error('Method not implemented.');
      this.hideRooms = !this.hideRooms;
    }

    ngOnInit() : void{}

    selectRoom(room:Room) {
      console.log(room);
      //this.selectedRoom = room;
    }

}
