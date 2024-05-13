import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from "@angular/common";
import { Item } from "./item";
import { ItemComponent } from "./item/item.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CommonModule, ItemComponent]
})
export class AppComponent {
  componentTitle = "My To Do List";

  filter: "all" | "active" | "done" = "all";

  allItems = [
    { description: "eat", done: true },
    { description: "sleep", done: false },
    { description: "play", done: false },
    { description: "laugh", done: false },
  ];

  get items() {
    if (this.filter === "all") {
      return this.allItems;
    }
    return this.allItems.filter((item) =>
      this.filter === "done" ? item.done : !item.done
    );
  }

  addItem(description : string) {
    if(!description) return;
    // unshift is adding item on top, you can use push to add item at end
    this.allItems.unshift({
      description,
      done : false
    })
  }

  remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }

}
