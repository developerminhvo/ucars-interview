import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'uc-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
  standalone: true,
  imports: [CommonModule],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'uc-tag',
    '[class.active]': `activated === true`,
    '[class.deactive]': `activated === false`,
  }
})
export class UCTagComponent implements OnInit {

  @Input()
  public activated: boolean = false;

  @Input()
  public selected: boolean = false;

  @Input()
  public expanded: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
