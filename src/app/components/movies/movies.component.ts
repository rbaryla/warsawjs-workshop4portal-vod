import { Component, OnInit } from '@angular/core';
import {AngularFire} from "angularfire2";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  items: any;

  constructor(private af: AngularFire) {
    this.items = af.database.list('/movies');
/*    this.items.subscribe((response) => {
      debugger;
    })*/
  }

  ngOnInit() {
  }

}
