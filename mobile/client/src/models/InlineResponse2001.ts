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
 * @interface InlineResponse2001
 */
export interface InlineResponse2001 {
    /**
     * 
     * @type {number}
     * @memberof InlineResponse2001
     */
    sum?: number;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse2001
     */
    place?: number;
}

export function InlineResponse2001FromJSON(json: any): InlineResponse2001 {
    return InlineResponse2001FromJSONTyped(json, false);
}

export function InlineResponse2001FromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineResponse2001 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sum': !exists(json, 'sum') ? undefined : json['sum'],
        'place': !exists(json, 'place') ? undefined : json['place'],
    };
}

export function InlineResponse2001ToJSON(value?: InlineResponse2001): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'sum': value.sum,
        'place': value.place,
    };
}


