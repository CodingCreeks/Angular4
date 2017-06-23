import { Routes } from '@angular/router';

import { ActivityListComponent } from './activity-list/activity-list.component';
import { MapComponent } from './map/map.component';
import { Component } from '@angular/core';
export const appRoutes: Routes = [
    { path: "", redirectTo: "/runs", pathMatch: 'full' },
    { path: "runs", component: ActivityListComponent },
    { path: "run/:id", component: MapComponent }
]