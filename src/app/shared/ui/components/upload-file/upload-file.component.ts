import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'uc-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [CommonModule],
  host: {
    class: 'uc-upload-file'
  }
})
export class UCUploadFileComponent implements OnInit {

  @Input()
  public title: string = 'Brand Logo';

  @ViewChild('logoUpload') 
  public myInputVariable!: HTMLInputElement;

  public logo: string | ArrayBuffer | null = null;
  public image!: File;

  constructor() { }

  ngOnInit() {
  }

  public uploadLogo(evt: any): void {
    const files: File[] = evt.target.files;
    console.log(this.logo);
    if (files.length > 1) {
      console.log('Chỉ được thêm vào 1 hình');
    } else {
      const file = files[0];
      const extensions: string[] = ['image/png', 'image/jpeg', 'image/jpg'];
      if (extensions.includes(file.type)) {
        if (file.size < 1024 * 1204 * 2) {
          const reader = new FileReader();
          reader.onloadend = () => {
            this.logo = reader.result
          };
          reader.readAsDataURL(file);
          this.image = files[0];
        } else {
          console.log('Hình nhỏ hơn 2GB');
        }
      } else {
        window.alert('Chỉ nhận .png, .jpeg, .jpg');
      }
    }
  }

  public removeLogo(): void {
    this.logo = null;
    this.myInputVariable.value = '';
  }
}
