import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cyberintech-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footDate: Date = new Date();
  constructor() { }

  ngOnInit() {
  }

}
