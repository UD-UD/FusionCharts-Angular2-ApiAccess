import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import angular2-fusioncharts
import { FusionChartsModule } from 'angular2-fusioncharts';

// Import FusionCharts library
//import * as FusionCharts from 'fusioncharts';

import * as  FusionCharts from '../fusioncharts';
import { TabComponent } from './tab/tab.component';
// Load FusionCharts Charts module
let Charts = require('../fusioncharts/fusioncharts.charts');
let PowerCharts = require('../fusioncharts/fusioncharts.powercharts');

// Create FusionCharts provider function
export function FusionChartsProvider () {
  // Resolve charts dependency

  Charts(FusionCharts);
  PowerCharts(FusionCharts);
  return FusionCharts;
}

@NgModule({
  declarations: [
    AppComponent,
    TabComponent
  ],
  imports: [
    BrowserModule,
   FusionChartsModule.forRoot(FusionChartsProvider)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
