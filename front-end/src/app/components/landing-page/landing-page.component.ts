import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { GameCallsService } from '../../services/game-calls.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit {
  title: string = "Tobbszemelyes poker jatek"
  currentUser: User | undefined;
  otherUser: User | undefined;

  constructor(
    private gameCallService: GameCallsService
  ) {}

  ngOnInit() {
    this.getCurrentUser();
    this.getOtherUser();
  }

  getCurrentUser() {
    this.gameCallService.getCurrentUser().subscribe(data => this.currentUser = {
      userID: data.userID,
      userName: data.userName,
      chip: data.chip
    });
  }

  getOtherUser() {
    this.gameCallService.getOtherUser().subscribe(data => this.otherUser = {
      userID: data.userID,
      userName: data.userName,
      chip: data.chip
    });
  }
}
