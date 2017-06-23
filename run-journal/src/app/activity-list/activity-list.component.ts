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
  constructor(private activityService: ActivityService) { }

  ngOnInit() {
  }

}
