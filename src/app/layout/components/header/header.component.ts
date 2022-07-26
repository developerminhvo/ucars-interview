import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

const MODULES = [CommonModule];

@Component({
  selector: 'uc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    ...MODULES
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
