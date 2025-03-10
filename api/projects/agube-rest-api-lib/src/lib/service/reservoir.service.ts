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
import { ReservoirResume } from '../model/reservoirResume';
import { Observable } from 'rxjs';
import { Configuration } from '../configuration';
import { AgubeRestConfigurationService } from '../configuration.service';
import { Owner } from '../model/owner';
import { ReservoirCreate } from '../model/reservoirCreate';
import { ReservoirDetail } from '../model/reservoirDetail';
import { WaterMeter } from '../model/waterMeter';
import { WaterMeterWithMeasurements } from '../model/waterMeterWithMeasurements';
import { WaterMeterMeasurementsPagination } from '../model/waterMeterMeasurementsPagination';
import { ReservoirCommentCreate } from '../model/reservoirCommentCreate';
import { Comment } from './../model/comment';

@Injectable()
export class ReservoirService {
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
   * Create a new Water Meter and discharge the old Water Meter in the Reservoir
   * @param id A unique integer value identifying this reservoir water meter.
   * @param data
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public changeCurrentReservoirWaterMeter(
    id: number,
    data: WaterMeter,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<WaterMeter>;
  public changeCurrentReservoirWaterMeter(
    id: number,
    data: WaterMeter,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<WaterMeter>>;
  public changeCurrentReservoirWaterMeter(
    id: number,
    data: WaterMeter,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<WaterMeter>>;
  public changeCurrentReservoirWaterMeter(
    id: number,
    data: WaterMeter,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling changeCurrentReservoirWaterMeter.'
      );
    }

    if (data === null || data === undefined) {
      throw new Error(
        'Required parameter data was null or undefined when calling changeCurrentReservoirWaterMeter.'
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

    return this.httpClient.post<WaterMeter>(
      `${this.basePath}/reservoir/${encodeURIComponent(
        String(id)
      )}/water-meter`,
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
   * create a new Reservoir
   * @param data
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public createReservoir(
    data: ReservoirCreate,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<ReservoirCreate>;
  public createReservoir(
    data: ReservoirCreate,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<ReservoirCreate>>;
  public createReservoir(
    data: ReservoirCreate,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<ReservoirCreate>>;
  public createReservoir(
    data: ReservoirCreate,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (data === null || data === undefined) {
      throw new Error(
        'Required parameter data was null or undefined when calling createReservoir.'
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

    return this.httpClient.post<ReservoirCreate>(
      `${this.basePath}/reservoir/create`,
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
   * Create a new Comment for this Reservoir.
   * @param data
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public createReservoirComment(
    data: ReservoirCommentCreate,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<ReservoirCommentCreate>;
  public createReservoirComment(
    data: ReservoirCommentCreate,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<ReservoirCommentCreate>>;
  public createReservoirComment(
    data: ReservoirCommentCreate,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<ReservoirCommentCreate>>;
  public createReservoirComment(
    data: ReservoirCommentCreate,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (data === null || data === undefined) {
      throw new Error(
        'Required parameter data was null or undefined when calling createReservoirComment.'
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

    return this.httpClient.post<ReservoirCommentCreate>(
      `${this.basePath}/reservoir/comment`,
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
   * Get Current Owner of the Reservoir
   * @param id A unique integer value identifying this reservoir.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getCurrentReservoirOwner(
    id: number,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<Owner>;
  public getCurrentReservoirOwner(
    id: number,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<Owner>>;
  public getCurrentReservoirOwner(
    id: number,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<Owner>>;
  public getCurrentReservoirOwner(
    id: number,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling getCurrentReservoirOwner.'
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

    return this.httpClient.get<Owner>(
      `${this.basePath}/reservoir/${encodeURIComponent(String(id))}/owner`,
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
   * Get current Water Meter of the Reservoir
   * @param id A unique integer value identifying this reservoir water meter.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getCurrentReservoirWaterMeter(
    id: number,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<WaterMeter>;
  public getCurrentReservoirWaterMeter(
    id: number,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<WaterMeter>>;
  public getCurrentReservoirWaterMeter(
    id: number,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<WaterMeter>>;
  public getCurrentReservoirWaterMeter(
    id: number,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling getCurrentReservoirWaterMeter.'
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

    return this.httpClient.get<WaterMeter>(
      `${this.basePath}/reservoir/${encodeURIComponent(
        String(id)
      )}/water-meter`,
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
   *
   * @param id
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getCurrentReservoirWaterMeterHistorical(
    id: number,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<Array<WaterMeterWithMeasurements>>;
  public getCurrentReservoirWaterMeterHistorical(
    id: number,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<Array<WaterMeterWithMeasurements>>>;
  public getCurrentReservoirWaterMeterHistorical(
    id: number,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<Array<WaterMeterWithMeasurements>>>;
  public getCurrentReservoirWaterMeterHistorical(
    id: number,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling getCurrentReservoirWaterMeterHistorical.'
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

    return this.httpClient.get<Array<WaterMeterWithMeasurements>>(
      `${this.basePath}/reservoir/${encodeURIComponent(
        String(id)
      )}/water-meter/historical`,
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
   * Get Reservoir by id
   * @param id A unique integer value identifying this reservoir.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getReservoir(
    id: number,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<ReservoirCreate>;
  public getReservoir(
    id: number,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<ReservoirCreate>>;
  public getReservoir(
    id: number,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<ReservoirCreate>>;
  public getReservoir(
    id: number,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling getReservoir.'
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

    return this.httpClient.get<ReservoirCreate>(
      `${this.basePath}/reservoir/${encodeURIComponent(String(id))}`,
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
   * Return the full list of comments for this Reservoir.
   * @param id
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getReservoirComments(
    id: number,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<Array<Comment>>;
  public getReservoirComments(
    id: number,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<Array<Comment>>>;
  public getReservoirComments(
    id: number,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<Array<Comment>>>;
  public getReservoirComments(
    id: number,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling getReservoirComments.'
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

    return this.httpClient.get<Array<Comment>>(
      `${this.basePath}/reservoir/${encodeURIComponent(String(id))}/comment`,
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
   * Return the current Water Meter of Reservoir with measurements chunk.
   * @param chunk
   * @param id
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getReservoirCurrentWaterMeterMeasuresChunk(
    chunk: number,
    id: number,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<WaterMeterWithMeasurements>;
  public getReservoirCurrentWaterMeterMeasuresChunk(
    chunk: number,
    id: number,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<WaterMeterWithMeasurements>>;
  public getReservoirCurrentWaterMeterMeasuresChunk(
    chunk: number,
    id: number,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<WaterMeterWithMeasurements>>;
  public getReservoirCurrentWaterMeterMeasuresChunk(
    chunk: number,
    id: number,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (chunk === null || chunk === undefined) {
      throw new Error(
        'Required parameter chunk was null or undefined when calling getReservoirCurrentWaterMeterMeasuresChunk.'
      );
    }

    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling getReservoirCurrentWaterMeterMeasuresChunk.'
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

    return this.httpClient.get<WaterMeterWithMeasurements>(
      `${this.basePath}/reservoir/${encodeURIComponent(
        String(id)
      )}/water-meter/${encodeURIComponent(String(chunk))}`,
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
   * Return a list of all Reservoir Detail.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getReservoirs(
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<Array<ReservoirDetail>>;
  public getReservoirs(
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<Array<ReservoirDetail>>>;
  public getReservoirs(
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<Array<ReservoirDetail>>>;
  public getReservoirs(
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
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

    return this.httpClient.get<Array<ReservoirDetail>>(
      `${this.basePath}/reservoir`,
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
   * get Resume of the Reservoir
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getResume(
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<ReservoirResume>;
  public getResume(
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<ReservoirResume>>;
  public getResume(
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<ReservoirResume>>;
  public getResume(
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
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

    return this.httpClient.get<ReservoirResume>(
      `${this.basePath}/reservoir/resume`,
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
   * Return a pagination of reservoir water meter measurements between dates.
   * @param id A unique integer value identifying this reservoir.
   * @param page A page number within the paginated result set.
   * @param pageSize Number of results to return per page.
   * @param startDate Filter start date
   * @param endDate Filter end date
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getReservoirWaterMeterMeasurements(
    id: number,
    page?: number,
    pageSize?: number,
    startDate?: string,
    endDate?: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<WaterMeterMeasurementsPagination>;
  public getReservoirWaterMeterMeasurements(
    id: number,
    page?: number,
    pageSize?: number,
    startDate?: string,
    endDate?: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<WaterMeterMeasurementsPagination>>;
  public getReservoirWaterMeterMeasurements(
    id: number,
    page?: number,
    pageSize?: number,
    startDate?: string,
    endDate?: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<WaterMeterMeasurementsPagination>>;
  public getReservoirWaterMeterMeasurements(
    id: number,
    page?: number,
    pageSize?: number,
    startDate?: string,
    endDate?: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling getReservoirWaterMeterMeasurements.'
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
      `${this.basePath}/reservoir/${encodeURIComponent(
        String(id)
      )}/water-meter/measurements`,
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
