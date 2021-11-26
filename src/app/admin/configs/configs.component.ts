import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { SilingCompany } from '../store/admin.state';

@Component({
  selector: 'app-admin-configs',
  templateUrl: 'configs.component.html',
  styleUrls: ['./configs.component.scss']
})
export class AdminConfigsComponent implements OnInit {

  constructor(public as: AdminService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() { }

  onCompanyClick(co: SilingCompany) {
    this.router.navigate(['./', co.id], {relativeTo: this.route});
  }
}
