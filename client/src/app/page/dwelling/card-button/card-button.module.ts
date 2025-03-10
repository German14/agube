import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardButtonComponent } from './card-button.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { TranslateModule } from '@ngx-translate/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [CardButtonComponent],
    imports: [
        CommonModule,
        MatCardModule,
        MatDividerModule,
        MatIconModule,
        PipesModule,
        TranslateModule,
        MatTooltipModule,
        MatButtonModule,
    ],
    exports: [CardButtonComponent],
})
export class CardButtonModule {}
