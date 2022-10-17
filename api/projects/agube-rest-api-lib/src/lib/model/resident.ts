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
import { UserCreate } from './userCreate';

export interface Resident {
  readonly id?: number;
  readonly dwelling_id?: number;
  user: UserCreate;
  readonly release_date?: string;
  readonly discharge_date?: string;
}
