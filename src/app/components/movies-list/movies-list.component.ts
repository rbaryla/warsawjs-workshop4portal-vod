import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {MovieModel} from "../movies/movie.model";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  @Input() items: {}[];
  @Input() filters: BehaviorSubject<MovieModel>;
  @Output() removeEvent: EventEmitter<any>;

  constructor() {
    this.removeEvent = new EventEmitter();
  }

  removeItem({$key}) {
    this.removeEvent.emit($key);
  }

  ngOnInit() {
  }

}
