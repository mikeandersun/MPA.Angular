import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title: string;

  constructor() {
   // this.title = title;
  }
  ngOnInit() {
    this.title = "Asad";
  }
}
