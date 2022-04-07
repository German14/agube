import { Injectable } from '@angular/core';
import {
  DwellingService,
  ReservoirService,
  WaterMeter,
  WaterMeterWithMeasurements,
} from '@availa/agube-rest-api';
import { Observable } from 'rxjs';
import { WaterMeterType } from './water-meter-type.enum';

@Injectable({
  providedIn: 'root',
})
export class WaterMeterManager {
  constructor(
    private readonly svcDwelling: DwellingService,
    private readonly svcReservoir: ReservoirService
  ) {
    //
  }

  public change(id: number, waterMeter: WaterMeter, type: WaterMeterType): any {
    if (+type === +WaterMeterType.DWELLING) {
      return this.svcDwelling.changeCurrentDwellingWaterMeter(id, waterMeter);
    } else if (+type === +WaterMeterType.RESERVOIR) {
      return this.svcReservoir.changeCurrentReservoirWaterMeter(id, waterMeter);
    }
  }

  public get(id: number, type: WaterMeterType): Observable<WaterMeter> {
    if (+type === +WaterMeterType.DWELLING) {
      return this.svcDwelling.getCurrentDwellingWaterMeter(id);
    } else if (+type === +WaterMeterType.RESERVOIR) {
      return this.svcReservoir.getCurrentReservoirWaterMeter(id);
    } else {
      // FIXME: throw error
      return this.svcDwelling.getCurrentDwellingWaterMeter(id);
    }
  }

  public getChunk(
    id: number,
    chunk: number,
    type: WaterMeterType
  ): Observable<WaterMeterWithMeasurements> | any {
    if (+type === +WaterMeterType.DWELLING) {
      return this.svcDwelling.getCurrentWaterMeterMeasuresChunk(chunk, id);
    } else if (+type === +WaterMeterType.RESERVOIR) {
      return this.svcReservoir.getReservoirCurrentWaterMeterMeasuresChunk(
        chunk,
        id
      );
    } else {
      return undefined;
    }
  }
}
