import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-configs',
  templateUrl: 'configs.component.html',
  styleUrls: ['./configs.component.scss']
})
export class AdminConfigsComponent implements OnInit {
  constructor(public as: AdminService) { }

  ngOnInit() { }
}
