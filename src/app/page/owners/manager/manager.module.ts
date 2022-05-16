import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerComponent } from './manager.component';
import { TableOwnerComponent } from './table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { WaterMeterModule } from '../../water-meter/water-meter.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { InfoComponent } from './info/info.component';

@NgModule({
    declarations: [ManagerComponent, TableOwnerComponent, InfoComponent],
    imports: [
        CommonModule,
        ManagerRoutingModule,
        MatCardModule,
        MatTableModule,
        MatButtonModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        PipesModule,
        MatIconModule,
        WaterMeterModule,
        MatDividerModule,
        MatTooltipModule,
        TranslateModule,
        MatPaginatorModule,
    ],
})
export class ManagerOwnerModule {}
