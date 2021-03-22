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

import { Inject, Injectable, Optional } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
  HttpEvent,
} from '@angular/common/http';
import { CustomHttpUrlEncodingCodec } from '../encoder';

import { Observable } from 'rxjs';

import { JSONWebToken } from '../model/jSONWebToken';
import { RefreshJSONWebToken } from '../model/refreshJSONWebToken';

import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';

@Injectable()
export class TokenService {
  protected basePath = 'http://localhost:8002/api/v1/agube';
  public defaultHeaders = new HttpHeaders();
  public configuration = new Configuration();

  constructor(
    protected httpClient: HttpClient,
    @Optional() @Inject(BASE_PATH) basePath: string,
    @Optional() configuration: Configuration
  ) {
    if (basePath) {
      this.basePath = basePath;
    }
    if (configuration) {
      this.configuration = configuration;
      this.basePath = basePath || configuration.basePath || this.basePath;
    }
  }

  /**
   * @param consumes string[] mime-types
   * @return true: consumes contains 'multipart/form-data', false: otherwise
   */
  private canConsumeForm(consumes: string[]): boolean {
    const form = 'multipart/form-data';
    for (const consume of consumes) {
      if (form === consume) {
        return true;
      }
    }
    return false;
  }

  /**
   * API View that receives a POST with a user&#39;s username and password.
   * Returns a JSON Web Token that can be used for authenticated requests.
   * @param data
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public tokenAuthCreate(
    data: JSONWebToken,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<JSONWebToken>;
  public tokenAuthCreate(
    data: JSONWebToken,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<JSONWebToken>>;
  public tokenAuthCreate(
    data: JSONWebToken,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<JSONWebToken>>;
  public tokenAuthCreate(
    data: JSONWebToken,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (data === null || data === undefined) {
      throw new Error(
        'Required parameter data was null or undefined when calling tokenAuthCreate.'
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
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];
    const httpContentTypeSelected:
      | string
      | undefined = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }

    return this.httpClient.post<JSONWebToken>(
      `${this.basePath}/token/auth`,
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
   * API View that returns a refreshed token (with new expiration) based on existing token
   * If &#39;orig_iat&#39; field (original issued-at-time) is found, will first check if it&#39;s within expiration window, then copy it to the new token
   * @param data
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public tokenRefreshCreate(
    data: RefreshJSONWebToken,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<RefreshJSONWebToken>;
  public tokenRefreshCreate(
    data: RefreshJSONWebToken,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<RefreshJSONWebToken>>;
  public tokenRefreshCreate(
    data: RefreshJSONWebToken,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<RefreshJSONWebToken>>;
  public tokenRefreshCreate(
    data: RefreshJSONWebToken,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (data === null || data === undefined) {
      throw new Error(
        'Required parameter data was null or undefined when calling tokenRefreshCreate.'
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
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];
    const httpContentTypeSelected:
      | string
      | undefined = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }

    return this.httpClient.post<RefreshJSONWebToken>(
      `${this.basePath}/token/refresh`,
      data,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }
}
