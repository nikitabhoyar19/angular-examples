export interface Room {
    id : number,
    name : string,
    type : string,
    price : number,
    available : boolean,
    mfd : Date,
    rating : number
}
/*
  {
        "id": 0,
        "name": "cozy bedsheet",
        "type": "Double",
        "price": 50,
        "available": true,
        "mfd" : "2024-04-15",
        "rating" : 4.3
    },
    {
      "id": 1,
      "name": "Cozy Bedroom",
      "type": "Single",
      "price": 50,
      "available": true,
      "mfd" : "2024-04-15",
      "rating" : 2.667
    },
    {
      "id": 2,
      "name": "spacious Suite",
      "type": "Double",
      "price": 100,
      "available": false,
      "mfd" : "2024-04-15",
      "rating" : 4.9
    },
    {
      "id": 3,
      "name": "Luxury Penthouse",
      "type": "Suite",
      "price": 200,
      "available": true,
      "mfd" : "2024-04-15",
      "rating" : 1.5
    },
*/