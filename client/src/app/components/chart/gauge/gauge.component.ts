import { ChartComponent } from './../chart.component';
import { Component, OnChanges } from '@angular/core';
import { Type } from '../chart-configure';

@Component({
    selector: 'app-gauge',
    templateUrl: '../chart.component.html',
    styleUrls: ['../chart.component.scss'],
})
export class GaugeComponent extends ChartComponent implements OnChanges {
    protected override type: Type = Type.gauge;
    protected override header = ['Label', 'Value'];

    constructor() {
        super();
    }

    override ngOnChanges(): void {
        super.ngOnChanges();
    }
}
