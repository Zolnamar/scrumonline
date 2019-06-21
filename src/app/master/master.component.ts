import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Session } from '../session';
import { Card, MemberVote } from '../card';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  session: Session = new Session();

  votes: MemberVote[] = [];

  stopwatchElapsed: string = '00:00';

  teamComplete: boolean = false;

  flipped: boolean;

  constructor(
    private route: ActivatedRoute) { 

    }

  ngOnInit() {
    this.session.id = +this.route.snapshot.paramMap.get('id');
    this.session.name = "Hi";
    this.flipped = true;
    this.votes = [
      {id: 1, value: '1', active: false,name: 'Thomas',confirmed: true,placed: true, canDelete: true},
      {id: 1, value: '3', active: false,name: 'Sandra',confirmed: true,placed: true, canDelete: true},
    ]
  }

  joinUrl(encode: boolean) : string {
    var location = window.location;
    // Build url from location
    var url = `${location.protocol}//${location.hostname}:${location.port}/join/${this.session.id}`;
    if (encode)
      url = encodeURIComponent(url);
    return url;
  }

  removeMember(card: Card) {

  }

  wipe() {

  }
}
