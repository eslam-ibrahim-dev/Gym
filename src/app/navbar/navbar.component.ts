import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  id =0;

  constructor() { }

  ngOnInit(): void {
  }

  addClass(id: any) {
    this.id = id;
  }
removeClass(id: any) {
  this.id = id;
  }

}
