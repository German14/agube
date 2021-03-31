import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeOwnerComponent } from './change-owner.component';
import { UtilsModule } from '../dWellingUtils/utils.module';

@NgModule({
  declarations: [ChangeOwnerComponent],
  imports: [CommonModule, UtilsModule],
})
export class ChangeOwnerModule {}
