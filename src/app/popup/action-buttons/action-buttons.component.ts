import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ui-action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.scss'],
})
export class ActionButtonsComponent implements OnInit {
  @Input()
  disabled?: boolean | null;

  @Output()
  onCreate = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  createOnClick() {
    this.onCreate.emit();
  }
}
