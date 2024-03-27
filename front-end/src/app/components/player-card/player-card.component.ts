import { Component, Input } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrl: './player-card.component.css'
})
export class PlayerCardComponent {
  @Input() user!: User;
}
