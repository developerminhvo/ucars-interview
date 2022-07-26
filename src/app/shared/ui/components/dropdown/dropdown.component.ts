import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'uc-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: [`./dropdown.component.scss`],
  standalone: true,
  imports: [CommonModule]
})
export class UCDropdownComponent implements OnInit {

  @ViewChild(TemplateRef) 
  public templateRef!: TemplateRef<any>;
  
  @Output() 
  public closed = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {
    
  }

}
