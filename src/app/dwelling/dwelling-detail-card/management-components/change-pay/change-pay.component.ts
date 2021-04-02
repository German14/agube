import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DwellingService } from 'apiaux/agube-rest-api-lib/src/public-api';
import { isUndefined } from 'lodash';
import { AccountService } from '../../../../login/service/account.service';

@Component({
  selector: 'app-change-pay',
  templateUrl: './change-pay.component.html',
  styleUrls: ['./change-pay.component.scss'],
})
export class ChangePayComponent implements OnInit {
  public registerForm: FormGroup;
  public username: string;
  public changePayId: string;
  public paymaster: any;
  public owner: any;
  public resident: any;
  public selectRow: any;
  public iban: any;
  public formConfigurationData: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private route: ActivatedRoute,
    private readonly svcChangePay: DwellingService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.route.queryParams.subscribe((params) => {
      this.changePayId = params.data;
    });
    this.registerForm = this.formBuilder.group({
      numberBank: new FormControl(),
    });
  }

  public onSubmit(): void {
    this.svcChangePay
      .changePaymaster(this.changePayId, {
        payment_type: 'BANK',
        iban: this.registerForm.value.numberBank,
        username: this.selectRow,
      })
      .subscribe(
        (value) => {
          this.ngOnInit();
        },
        (error) => {
          console.log('error');
        }
      );
  }
  public selectedRow(event): void {
    this.selectRow = event;
  }
  public ngOnInit(): void {
    this.svcChangePay.getPaymaster(this.changePayId).subscribe((value) => {
      this.iban = Object.entries(value)[2][1];
      this.paymaster = Object.entries(value)[3][1];
      this.registerForm.get('numberBank').setValue(this.iban);
    });
    this.svcChangePay.getCurrentOwner(+this.changePayId).subscribe((owner) => {
      this.owner = Object.entries(owner)[2][1]['username'];
    });

    this.svcChangePay
      .getCurrentResident(+this.changePayId)
      .subscribe((value) => {
        this.resident = Object.entries(value)[2][1]['username'];
      });
  }
  public goToControlPanel(): void {
    this.router.navigate(['/control-panel']);
  }
}
