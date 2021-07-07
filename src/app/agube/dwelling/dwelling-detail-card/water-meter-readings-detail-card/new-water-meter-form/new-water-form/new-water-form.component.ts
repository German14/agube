import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WaterMeterService } from '@availa/agube-rest-api';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-water-form',
  templateUrl: './new-water-form.component.html',
  styleUrls: ['./new-water-form.component.scss'],
})
export class NewWaterFormComponent implements OnInit {
  public createReading: FormGroup;
  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private svcWaterMeter: WaterMeterService
  ) {}

  ngOnInit(): void {
    this.createReading = this.formBuilder.group({
      code: ['', Validators.required],
      release_date: ['', Validators.required],
      measurement: ['', Validators.required],
    });
  }

  public cancel(): void {
    this.activeModal.close('Close click');
  }

  public save(): void {
    this.svcWaterMeter
      .addWaterMeterMeasure('1', {
        measurement: this.createReading.value.measurement,
        date: this.createReading.value.release_date,
        id: '1',
      })
      .subscribe((value) => {
        console.log(value);
      });
  }
}
