import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation, Input, ElementRef, ChangeDetectorRef, OnChanges, SimpleChanges, DoCheck } from '@angular/core';

export type ButtonType = 'primary' | 'default' | 'none';

@Component({
  selector: 'button[uc-button], button[ucButton]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
  imports: [CommonModule],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'uc-btn',
    '[class.uc-btn-primary]': `ucType === 'primary'`,
    '[class.uc-btn-default]': `ucType === 'default'`,
    '[class.uc-btn-none]': `ucType === 'none'`,
  }
})
export class UCButtonComponent implements OnInit, OnChanges {

  @Input()
  public ucType: ButtonType = "default";

  constructor(
    public elementRef: ElementRef<HTMLButtonElement>,
    public cdr: ChangeDetectorRef
  ) {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    //
  }

  ngOnInit(): void {
    
  }

}
