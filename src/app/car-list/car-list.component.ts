import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UCInputGroupComponent, UCButtonComponent, UCDropdownComponent, UCTagComponent, UCUploadFileComponent } from '../shared/ui';
import { UCAddBrandComponent, UCFilterComponent } from './components';
import {MatDialogModule, MatDialog} from '@angular/material/dialog';

const COMPONENTS = [
  UCButtonComponent, 
  UCInputGroupComponent, 
  UCDropdownComponent, 
  UCFilterComponent, 
  UCTagComponent, 
  UCUploadFileComponent,
  UCAddBrandComponent
];

const MODULES = [
  CommonModule, 
  MatDialogModule
]

@Component({
  selector: 'uc-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss'],
  imports: [
    ...COMPONENTS,
    ...MODULES
  ],
  standalone: true
})
export class CarListComponent implements OnInit {

  constructor(
    private _dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  public openAddBrandDialog(): void {
    const dialogRef = this._dialog.open(UCAddBrandComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
