import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChild, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { UcInputDirective } from '../../directives';

const MODULES = [CommonModule];
const DIRECTIVES = [UcInputDirective]
@Component({
  selector: 'uc-input-group',
  templateUrl: './input-group.component.html',
  styleUrls: ['./input-group.component.scss'],
  standalone: true,
  imports: [
    ...MODULES,
    ...DIRECTIVES
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.uc-input-group]': `ucAddOnBeforeIcon || ucAddOnAfterIcon`,
    '[class.prefix]': `ucAddOnBeforeIcon`,
    '[class.affix]': `ucAddOnAfterIcon`,
  }
})
export class UCInputGroupComponent implements OnInit {

  @Input()
  public ucAddOnBeforeIcon: string | null = null;

  @Input()
  public ucAddOnAfterIcon: string | null = null;

  @ContentChild(UcInputDirective) ucInputDirective!: UcInputDirective

  constructor() { }

  ngOnInit() {
  }

}
