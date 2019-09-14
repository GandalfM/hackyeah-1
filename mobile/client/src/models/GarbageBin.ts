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
 * @interface GarbageBin
 */
export interface GarbageBin {
    /**
     * 
     * @type {number}
     * @memberof GarbageBin
     */
    latitude: number;
    /**
     * 
     * @type {number}
     * @memberof GarbageBin
     */
    longitude: number;
    /**
     * 
     * @type {number}
     * @memberof GarbageBin
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof GarbageBin
     */
    userId?: number;
    /**
     * 
     * @type {number}
     * @memberof GarbageBin
     */
    approvalCount?: number;
    /**
     * 
     * @type {number}
     * @memberof GarbageBin
     */
    rejectionCount?: number;
}

export function GarbageBinFromJSON(json: any): GarbageBin {
    return GarbageBinFromJSONTyped(json, false);
}

export function GarbageBinFromJSONTyped(json: any, ignoreDiscriminator: boolean): GarbageBin {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'latitude': json['latitude'],
        'longitude': json['longitude'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'approvalCount': !exists(json, 'approvalCount') ? undefined : json['approvalCount'],
        'rejectionCount': !exists(json, 'rejectionCount') ? undefined : json['rejectionCount'],
    };
}

export function GarbageBinToJSON(value?: GarbageBin): any {
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


