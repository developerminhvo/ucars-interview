import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UCButtonComponent, UCUploadFileComponent } from 'src/app/shared/ui';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

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

  constructor(
    public dialogRef: MatDialogRef<UCAddBrandComponent>,
    @Inject(MAT_DIALOG_DATA) public data: unknown,
  ) { }

  ngOnInit() {
  }

  public closeModal(): void {
    this.dialogRef.close();
  }

}
