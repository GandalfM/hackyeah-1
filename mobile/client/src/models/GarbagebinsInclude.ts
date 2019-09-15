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
 * @interface GarbagebinsInclude
 */
export interface GarbagebinsInclude {
    /**
     * 
     * @type {string}
     * @memberof GarbagebinsInclude
     */
    relation?: string;
    /**
     * 
     * @type {object}
     * @memberof GarbagebinsInclude
     */
    scope?: object;
}

export function GarbagebinsIncludeFromJSON(json: any): GarbagebinsInclude {
    return GarbagebinsIncludeFromJSONTyped(json, false);
}

export function GarbagebinsIncludeFromJSONTyped(json: any, ignoreDiscriminator: boolean): GarbagebinsInclude {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'relation': !exists(json, 'relation') ? undefined : json['relation'],
        'scope': !exists(json, 'scope') ? undefined : json['scope'],
    };
}

export function GarbagebinsIncludeToJSON(value?: GarbagebinsInclude): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'relation': value.relation,
        'scope': value.scope,
    };
}

