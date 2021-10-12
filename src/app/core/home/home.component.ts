import { Component, OnInit } from '@angular/core';
import { NewEntryDialogService } from '../new-entry-dialog/new-entry-dialog.service';

@Component({
  selector: 'app-core-home',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss']
})
export class SummaryComponent implements OnInit {
  constructor(private neds: NewEntryDialogService) {
  }

  ngOnInit() { }

  onNewEntryClick() {
    this.neds.openDialog();
  }
}
