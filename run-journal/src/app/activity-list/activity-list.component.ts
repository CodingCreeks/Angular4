import { Component, OnInit } from '@angular/core';

import { Activity } from './../shared/activity.model';
import { ActivityService } from './../services/activity.service';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {
  activites: Activity[];
  totalActivites: number;
  totalDistance: number;
  firstDate: Date;
  constructor(private activityService: ActivityService) { }

  ngOnInit() {
    this.activites=this.activityService.getActivites();
    this.totalActivites=this.activityService.getTotalActivites(this.activites);
    this.totalDistance=this.activityService.getTotalDistance(this.activites);
    this.firstDate=this.activityService.getFirstDate(this.activites);
  }

}
