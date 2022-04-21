import {
  UserService,
  DwellingService,
  DwellingCreate,
  Geolocation,
  ManagerService,
} from '@availa/agube-rest-api';
import { AccountService } from '@availa/auth-fe';
import { Component, OnInit } from '@angular/core';
import { ConfigureView } from 'src/app/components/map/view/map-location';
import { ConfigureMap } from '../../../components/map/map/configure-map';
import { Router } from '@angular/router';
import {
  WaterMeterWithMeasurements,
  ManagerConfiguration,
} from '@availa/agube-rest-api';
import { GoogleChartConfigure } from 'src/app/components/chart/google-chart-configure';
@Component({
  selector: 'app-page-dwelling-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  public userId: number | undefined;
  public dwelling: DwellingCreate | undefined;

  // map
  public configureView: ConfigureView | undefined;
  public configureMap: ConfigureMap | undefined;
  // map config
  public mode: string = 'map';
  private mapZoomDefault: number = 15;
  private mapStreetViewPositionDegree: number = 0;
  private mapHeight: string = '500px';

  private static options = {
    width: 500,
    height: 200,
    redFrom: 90,
    redTo: 100,
    yellowFrom: 70,
    yellowTo: 90,
    minorTicks: 10,
  };
  public chartGoogleConsume!: GoogleChartConfigure;
  constructor(
    private router: Router,
    private svcAccount: AccountService,
    private svcUser: UserService,
    private svcDwelling: DwellingService,
    private readonly svcManager: ManagerService
  ) {
    this.dwelling = undefined;
  }

  ngOnInit(): void {
    this.svcAccount.getUser().subscribe((user) => {
      this.userId = user?.user_id;
      this.svcUser
        .getDwellingDetail(this.userId!)
        .subscribe((dwellingDetail) => {
          if (!dwellingDetail.length) {
            return;
          }
          this.svcDwelling
            .getDwelling(dwellingDetail[0].id!)
            .subscribe((dwelling) => {
              this.dwelling = dwelling;
              this.svcDwelling
                .getCurrentWaterMeterMeasuresChunk( 4,this.dwelling.id!)
                .subscribe((responseWaterMeterMeasurement) => {
                  if (!responseWaterMeterMeasurement) {
                    return;
                  }
                  this.svcManager
                    .getManagerConfiguration()
                    .subscribe((response) => {
                      this.configureWaterMeterCharts(
                        responseWaterMeterMeasurement,
                        response
                      );
                    });
                });
              let geolocation = this.dwelling.address.geolocation;
              this.configureMaps(geolocation);
            });
        });
    });
  }

  public goToNewDwelling() {
    this.router.navigate(['manager/dwellings/create']);
  }

  private configureWaterMeterCharts(
    waterMeterMeasurement: WaterMeterWithMeasurements,
    consumeToday: ManagerConfiguration
  ) {
    let sum = 0;
    for (let i = 0; i < waterMeterMeasurement.measures.length; i++) {
      sum += +waterMeterMeasurement.measures[i].measurement;
  }
   console.log(sum)
    this.chartGoogleConsume = {
      id: String(waterMeterMeasurement.id!),
      options: {
        height: DetailComponent.options.height,
        minorTicks: DetailComponent.options.minorTicks,
        width: DetailComponent.options.width,
        yellowFrom: 60,
        redFrom: 90,
        redTo: 100,
        yellowTo: 90,
      },

      arrayToDataTable: [{
        code: waterMeterMeasurement.code!,
        discharge_date: waterMeterMeasurement.discharge_date,
        release_date: waterMeterMeasurement.release_date,
        water_meter_measurement: waterMeterMeasurement,
        water_meter_measurementConsume: sum,
        consumeToday,
      }],
    };
  }
  private configureMaps(geolocation: Geolocation) {
    this.configureMap = {
      lat: geolocation.latitude,
      lon: geolocation.longitude,
      zoom: geolocation.zoom,
      showCircle: true,
      height: this.mapHeight,
    };
    this.configureView = {
      latitude: +geolocation.latitude,
      longitude: +geolocation.longitude,
      zoom: this.mapZoomDefault,
      horizontalDegree: this.mapStreetViewPositionDegree,
      verticalDegree: this.mapStreetViewPositionDegree,
      height: this.mapHeight,
    };
  }
}
