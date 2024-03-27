import { Component } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrl: './action-bar.component.css'
})
export class ActionBarComponent {
  currentUserChipNumber: number = 100; 
  showSlider: boolean = true;

  call() {
    // Implement your logic for Call button action here
    this.showSlider = false;
  }

  raise() {
    // Implement your logic for Raise button action here
    this.showSlider = true;
  }

  fold() {
    // Implement your logic for Fold button action here
    this.showSlider = false;
  }
}
