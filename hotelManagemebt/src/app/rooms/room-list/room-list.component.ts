import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Room} from '../rooms';

@Component({
  selector: 'app-room-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './room-list.component.html',
  styleUrl: './room-list.component.css'
})
export class RoomListComponent implements OnInit{

  @Input() rooms : Room[] = [];

  @Output() selectedRoom = new EventEmitter<Room>();

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  selectRoom(r:Room) {
    this.selectedRoom.emit(r);
  }

}
