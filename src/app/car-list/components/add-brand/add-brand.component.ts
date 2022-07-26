import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UCButtonComponent, UCUploadFileComponent } from 'src/app/shared/ui';

const COMPONENTS = [UCUploadFileComponent, UCButtonComponent];

const MODULES = [CommonModule];

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.scss'],
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    ...COMPONENTS,
    ...MODULES
  ]
})
export class UCAddBrandComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
