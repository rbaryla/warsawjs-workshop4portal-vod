import { Component, OnInit } from '@angular/core';
import {AngularFire} from "angularfire2";
import {Subject, BehaviorSubject} from "rxjs";
import {MovieModel} from "./movie.model";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  items: any;
  newMovie: Subject<MovieModel> = new Subject();
  moviesFilters: BehaviorSubject<MovieModel> = new BehaviorSubject(new MovieModel());
  filters: any;

  constructor(private af: AngularFire) {
    this.items = af.database.list('/movies');
    this.newMovie.subscribe((value) => {
        this.save(value);
    });

    this.moviesFilters.subscribe((filters) => {
        this.filters = filters;
    });
  }

  private save(value: MovieModel) {
    this.items.push(value);
  }

  removeItem(key) {
    if (confirm('are you shure?')) {
      this.items.remove(key);
    }
  }

  ngOnInit() {
  }

}
