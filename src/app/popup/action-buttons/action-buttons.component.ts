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
  onSave = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  saveOnClick() {
    this.onSave.emit();
  }
}
