import { Component, OnInit } from '@angular/core';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: 'admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private as: AdminService) {
  }

  ngOnInit() {
    // settings effects already gets the show hide list on init()
    //this.as.fetchShowHideCompanies();
  }
}
