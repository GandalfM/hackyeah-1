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
 * @interface AwardOptionalUserIdExcludingId
 */
export interface AwardOptionalUserIdExcludingId {
    /**
     * 
     * @type {number}
     * @memberof AwardOptionalUserIdExcludingId
     */
    points: number;
    /**
     * 
     * @type {number}
     * @memberof AwardOptionalUserIdExcludingId
     */
    userId?: number;
    /**
     * 
     * @type {number}
     * @memberof AwardOptionalUserIdExcludingId
     */
    garbageBinId?: number;
}

export function AwardOptionalUserIdExcludingIdFromJSON(json: any): AwardOptionalUserIdExcludingId {
    return AwardOptionalUserIdExcludingIdFromJSONTyped(json, false);
}

export function AwardOptionalUserIdExcludingIdFromJSONTyped(json: any, ignoreDiscriminator: boolean): AwardOptionalUserIdExcludingId {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'points': json['points'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'garbageBinId': !exists(json, 'garbageBinId') ? undefined : json['garbageBinId'],
    };
}

export function AwardOptionalUserIdExcludingIdToJSON(value?: AwardOptionalUserIdExcludingId): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'points': value.points,
        'userId': value.userId,
        'garbageBinId': value.garbageBinId,
    };
}


