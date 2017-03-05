import {Component, OnInit, Input} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.css']
})
export class IframeComponent implements OnInit {

  urlSrc: any;
  @Input() set url(value){
    this.urlSrc =
      this.sanitizer.bypassSecurityTrustResourceUrl(value);
  };
  constructor(private sanitizer: DomSanitizer) {

  }

  ngOnInit() {
  }

}
