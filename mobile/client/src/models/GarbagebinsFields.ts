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
/**
 * 
 * @export
 * @interface GarbagebinsFields
 */
export interface GarbagebinsFields {
    /**
     * 
     * @type {boolean}
     * @memberof GarbagebinsFields
     */
    latitude?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GarbagebinsFields
     */
    longitude?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GarbagebinsFields
     */
    id?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GarbagebinsFields
     */
    userId?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GarbagebinsFields
     */
    approvalCount?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GarbagebinsFields
     */
    rejectionCount?: boolean;
}

export function GarbagebinsFieldsFromJSON(json: any): GarbagebinsFields {
    return GarbagebinsFieldsFromJSONTyped(json, false);
}

export function GarbagebinsFieldsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GarbagebinsFields {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'latitude': !exists(json, 'latitude') ? undefined : json['latitude'],
        'longitude': !exists(json, 'longitude') ? undefined : json['longitude'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'approvalCount': !exists(json, 'approvalCount') ? undefined : json['approvalCount'],
        'rejectionCount': !exists(json, 'rejectionCount') ? undefined : json['rejectionCount'],
    };
}

export function GarbagebinsFieldsToJSON(value?: GarbagebinsFields): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'latitude': value.latitude,
        'longitude': value.longitude,
        'id': value.id,
        'userId': value.userId,
        'approvalCount': value.approvalCount,
        'rejectionCount': value.rejectionCount,
    };
}


