import {Component, OnInit, Input} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Subject} from "rxjs";
import {MovieModel} from "../movies/movie.model";

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  @Input() newMovie:Subject<any>;
  myModal: any;

  constructor(private modalService:NgbModal) { }
  open(content) {
    this.myModal = this.modalService.open(content);
    this.myModal.result.then(({name, url}) => {
      this.newMovie.next(new MovieModel(name, url));
    }, (msg) => {
      console.log(msg);
    })
  }

  ok({valid, value}) {
    if (valid) {
      this.myModal.close(value);
    } else {
      console.warn('aaaaaa!!!!');
    }
  }

  cancel() {
    this.myModal.dismiss('cancel');
  }

  ngOnInit() {
  }

}
