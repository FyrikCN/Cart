import { Component, OnInit, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartCount = 4;
  imageSource = "https://drive.google.com/file/d/0B8KYnbdnrRGXSXVoMzdqRWhCTXc/view?usp=sharing";

  item = {
    Name: "Classic Tee",
    Price: "75.00",
    Description: "Some random description.",
    SelectedSize: ""
  }

  onClick(e) {
    // console.log(e);
    var selectedSize = e.originalTarget.innerText;
    this.item.SelectedSize = selectedSize;
  }
}
