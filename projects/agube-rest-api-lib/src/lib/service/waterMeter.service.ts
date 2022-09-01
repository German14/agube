/**
 * Agube API
 * Agube API REST definition
 *
 * OpenAPI spec version: v1
 * Contact: frannabril@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import {
  HttpClient,
  HttpEvent,
  HttpHeaders,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';
import { CustomHttpUrlEncodingCodec } from '../encoder';
import { Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { Configuration } from '../configuration';
import { AgubeRestConfigurationService } from '../configuration.service';
import { WaterMeterMeasurement } from '../model/waterMeterMeasurement';
import { WaterMeterMeasurementsPagination } from '../model/waterMeterMeasurementsPagination';

@Injectable()
export class WaterMeterService {
  protected basePath = '';
  public defaultHeaders = new HttpHeaders();
  public configuration = new Configuration();

  constructor(
    protected httpClient: HttpClient,
    private svcConfig: AgubeRestConfigurationService,
    @Optional() configuration: Configuration
  ) {
    if (configuration) {
      this.configuration = configuration;
      this.basePath = configuration.basePath || this.basePath;
    }
    this.basePath = this.svcConfig.getBasePath();
  }

  /**
   *
   * Create a new measurement for this water meter
   * @param id A unique integer value identifying this water meter.
   * @param data
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public addWaterMeterMeasurement(
    id: number,
    data: WaterMeterMeasurement,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<WaterMeterMeasurement>;
  public addWaterMeterMeasurement(
    id: number,
    data: WaterMeterMeasurement,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<WaterMeterMeasurement>>;
  public addWaterMeterMeasurement(
    id: number,
    data: WaterMeterMeasurement,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<WaterMeterMeasurement>>;
  public addWaterMeterMeasurement(
    id: number,
    data: WaterMeterMeasurement,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling addWaterMeterMeasurement.'
      );
    }

    if (data === null || data === undefined) {
      throw new Error(
        'Required parameter data was null or undefined when calling addWaterMeterMeasurement.'
      );
    }

    let headers = this.defaultHeaders;

    // authentication (Basic) required
    if (this.configuration.username || this.configuration.password) {
      headers = headers.set(
        'Authorization',
        'Basic ' +
          btoa(this.configuration.username + ':' + this.configuration.password)
      );
    }

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected: string | undefined =
      this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];
    const httpContentTypeSelected: string | undefined =
      this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }

    return this.httpClient.post<WaterMeterMeasurement>(
      `${this.basePath}/water-meter/${encodeURIComponent(
        String(id)
      )}/measurement`,
      data,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }

  /**
   *
   * Return a pagination of water meter measurements between dates.
   * @param id A unique integer value identifying this water meter.
   * @param startDate Filter start date
   * @param endDate Filter end date
   * @param page A page number within the paginated result set.
   * @param pageSize Number of results to return per page.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getWaterMeterMeasurements(
    id: number,
    startDate: string,
    endDate: string,
    page?: number,
    pageSize?: number,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<WaterMeterMeasurementsPagination>;
  public getWaterMeterMeasurements(
    id: number,
    startDate: string,
    endDate: string,
    page?: number,
    pageSize?: number,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<WaterMeterMeasurementsPagination>>;
  public getWaterMeterMeasurements(
    id: number,
    startDate: string,
    endDate: string,
    page?: number,
    pageSize?: number,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<WaterMeterMeasurementsPagination>>;
  public getWaterMeterMeasurements(
    id: number,
    startDate: string,
    endDate: string,
    page?: number,
    pageSize?: number,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling getWaterMeterMeasurements.'
      );
    }

    if (startDate === null || startDate === undefined) {
      throw new Error(
        'Required parameter startDate was null or undefined when calling getWaterMeterMeasurements.'
      );
    }

    if (endDate === null || endDate === undefined) {
      throw new Error(
        'Required parameter endDate was null or undefined when calling getWaterMeterMeasurements.'
      );
    }

    let queryParameters = new HttpParams({
      encoder: new CustomHttpUrlEncodingCodec(),
    });
    if (page !== undefined && page !== null) {
      queryParameters = queryParameters.set('page', <any>page);
    }
    if (pageSize !== undefined && pageSize !== null) {
      queryParameters = queryParameters.set('page_size', <any>pageSize);
    }
    if (startDate !== undefined && startDate !== null) {
      queryParameters = queryParameters.set('start_date', <any>startDate);
    }
    if (endDate !== undefined && endDate !== null) {
      queryParameters = queryParameters.set('end_date', <any>endDate);
    }

    let headers = this.defaultHeaders;

    // authentication (Basic) required
    if (this.configuration.username || this.configuration.password) {
      headers = headers.set(
        'Authorization',
        'Basic ' +
          btoa(this.configuration.username + ':' + this.configuration.password)
      );
    }

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected: string | undefined =
      this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];

    return this.httpClient.get<any>(
      `${this.basePath}/water-meter/${encodeURIComponent(
        String(id)
      )}/measurement`,
      {
        params: queryParameters,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }
}
