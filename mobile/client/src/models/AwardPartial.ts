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
 * @interface AwardPartial
 */
export interface AwardPartial {
    /**
     * 
     * @type {number}
     * @memberof AwardPartial
     */
    points?: number;
    /**
     * 
     * @type {string}
     * @memberof AwardPartial
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof AwardPartial
     */
    userId?: string;
    /**
     * 
     * @type {string}
     * @memberof AwardPartial
     */
    garbageBinId?: string;
}

export function AwardPartialFromJSON(json: any): AwardPartial {
    return AwardPartialFromJSONTyped(json, false);
}

export function AwardPartialFromJSONTyped(json: any, ignoreDiscriminator: boolean): AwardPartial {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'points': !exists(json, 'points') ? undefined : json['points'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'garbageBinId': !exists(json, 'garbageBinId') ? undefined : json['garbageBinId'],
    };
}

export function AwardPartialToJSON(value?: AwardPartial): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'points': value.points,
        'id': value.id,
        'userId': value.userId,
        'garbageBinId': value.garbageBinId,
    };
}


