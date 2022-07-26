import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UCInputGroupComponent, UCButtonComponent, UCDropdownComponent, UCTagComponent, UCUploadFileComponent } from '../shared/ui';
import { UCAddBrandComponent, UCFilterComponent } from './components';
import {MatDialogModule, MatDialog} from '@angular/material/dialog';
import { provideComponentStore } from '@ngrx/component-store';
import { UCCarlistStore } from './car-list.store';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';

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
  ReactiveFormsModule,
  MatDialogModule
]

@Component({
  standalone: true,
  selector: 'uc-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss'],
  imports: [
    ...COMPONENTS,
    ...MODULES
  ],
  providers: [provideComponentStore(UCCarlistStore)],
})
export class CarListComponent implements OnInit {

  public readonly vm$ = this._carListStore.vm$;

  public form!: FormGroup;

  constructor(
    private _carListStore: UCCarlistStore,
    private _dialog: MatDialog,
    private _fb: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
    this._carListStore.filterBrand(
      this.form.valueChanges.pipe(
        debounceTime(1000)
      )
    )
  }

  public initForm(): void {
    this.form = this._fb.group({
      'brandName': ['']
    })
  }

  public openAddBrandDialog(): void {
    const dialogRef = this._dialog.open(UCAddBrandComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

