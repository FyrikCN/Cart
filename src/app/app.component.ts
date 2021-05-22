import { FavoriteChangedEventArgs } from './favorite/favorite.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngreview';
  isFavorite = false;
  hasCourse = false;
  viewMode = "first";

  onChanged(obj: FavoriteChangedEventArgs) {
    console.log("favorate has been changed to: " + obj.isFavorite);
  }
}
