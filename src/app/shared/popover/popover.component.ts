import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared-popover',
  templateUrl: 'popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent implements OnInit {

  @Input()
  text?: any = undefined;

  constructor() { }

  ngOnInit() { }
}
