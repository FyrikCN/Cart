import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {

  @Input('isFavorite') isFavorite: boolean;
  @Output('change') change = new EventEmitter();

  onClick() {
    this.isFavorite = !this.isFavorite;

    this.change.emit({ isFavorite: this.isFavorite });
  }

}

export interface FavoriteChangedEventArgs {
  isFavorite: boolean
}