import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UCButtonComponent, UCDropdownComponent } from 'src/app/shared/ui';
import { UCDropdownTriggerForDirective } from 'src/app/shared/ui/directives';

const MOUDLES = [CommonModule, OverlayModule];

const COMPONENTS = [UCDropdownComponent, UCButtonComponent];

const DIRECTIVES = [UCDropdownTriggerForDirective]

@Component({
  selector: 'uc-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  standalone: true,
  imports: [
    ...MOUDLES,
    ...DIRECTIVES,
    ...COMPONENTS
  ]
})
export class UCFilterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
