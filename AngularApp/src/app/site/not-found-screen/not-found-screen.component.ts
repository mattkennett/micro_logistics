import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found-screen',
  templateUrl: './not-found-screen.component.html',
  styleUrls: ['./not-found-screen.component.css']
})
export class NotFoundScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // TODO: This component should only load when an error happens, so we might want to do some logging here
  }

}
