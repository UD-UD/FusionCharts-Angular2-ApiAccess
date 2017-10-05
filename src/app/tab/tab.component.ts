import { Component, OnInit, ViewChild } from '@angular/core';
import { FusionChartsComponent } from 'angular2-fusioncharts';
@Component({
    selector: 'app-tab',
    templateUrl: './tab.component.html',
    styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

    title: string;
    dataSource: any;
    isHidden: boolean;
    @ViewChild(FusionChartsComponent) chartsComponent: FusionChartsComponent

    constructor() {
        this.title = 'app';
        this.dataSource = {
            chart: {
                subCaption: "Top 5 stores in last month by revenue",
                numberPrefix: "$",
                theme: "ocean"
            },
            data: [{
                label: "Bakersfield Central",
                value: "880000"
            },
            {
                label: "Garden Groove harbour",
                value: "730000"
            },
            {
                label: "Los Angeles Topanga",
                value: "590000"
            },
            {
                label: "Compton-Rancho Dom",
                value: "520000"
            },
            {
                label: "Daly City Serramonte",
                value: "330000"
            }]
        };
    }

    printChartObj() {
        console.log(this.chartsComponent.chartObj);
    }

    getCSV() {
        console.log(this.chartsComponent.chartObj.getCSVData());
    }

    ngOnInit() {
    }
}
