import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'ui-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {
  @Input()
  title?: string;

  @Input()
  visible = false;

  @Output()
  visibleChange = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  closeOnClick() {
    this.visible = false;

    this.visibleChange.emit(this.visible);
  }

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(
    evt: KeyboardEvent
  ) {
    this.visible = false;

    this.visibleChange.emit(this.visible);
  }
}
