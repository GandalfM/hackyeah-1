// tslint:disable
/**
 * LoopBack Application
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    GarbagebinsInclude,
    GarbagebinsIncludeFromJSON,
    GarbagebinsIncludeFromJSONTyped,
    GarbagebinsIncludeToJSON,
    UsersFields,
    UsersFieldsFromJSON,
    UsersFieldsFromJSONTyped,
    UsersFieldsToJSON,
} from './';

/**
 * 
 * @export
 * @interface Filter1
 */
export interface Filter1 {
    /**
     * 
     * @type {object}
     * @memberof Filter1
     */
    where?: object;
    /**
     * 
     * @type {UsersFields}
     * @memberof Filter1
     */
    fields?: UsersFields;
    /**
     * 
     * @type {number}
     * @memberof Filter1
     */
    offset?: number;
    /**
     * 
     * @type {number}
     * @memberof Filter1
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof Filter1
     */
    skip?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof Filter1
     */
    order?: Array<string>;
    /**
     * 
     * @type {Array<GarbagebinsInclude>}
     * @memberof Filter1
     */
    include?: Array<GarbagebinsInclude>;
}

export function Filter1FromJSON(json: any): Filter1 {
    return Filter1FromJSONTyped(json, false);
}

export function Filter1FromJSONTyped(json: any, ignoreDiscriminator: boolean): Filter1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'where': !exists(json, 'where') ? undefined : json['where'],
        'fields': !exists(json, 'fields') ? undefined : UsersFieldsFromJSON(json['fields']),
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'skip': !exists(json, 'skip') ? undefined : json['skip'],
        'order': !exists(json, 'order') ? undefined : json['order'],
        'include': !exists(json, 'include') ? undefined : (json['include'] as Array<any>).map(GarbagebinsIncludeFromJSON),
    };
}

export function Filter1ToJSON(value?: Filter1): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'where': value.where,
        'fields': UsersFieldsToJSON(value.fields),
        'offset': value.offset,
        'limit': value.limit,
        'skip': value.skip,
        'order': value.order,
        'include': value.include === undefined ? undefined : (value.include as Array<any>).map(GarbagebinsIncludeToJSON),
    };
}


