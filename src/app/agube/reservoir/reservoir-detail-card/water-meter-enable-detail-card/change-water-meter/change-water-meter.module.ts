import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NotificationModule } from '@availa/notification';
import { ChangeReservoirComponent } from './change-water-meter.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    NotificationModule
  ],
  declarations: [ChangeReservoirComponent],
})
export class ChangeReservoirModule {}
