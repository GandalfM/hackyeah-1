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
 * @interface InlineResponse2002
 */
export interface InlineResponse2002 {
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2002
     */
    greeting?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2002
     */
    date?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2002
     */
    url?: string;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof InlineResponse2002
     */
    headers?: { [key: string]: object; };
}

export function InlineResponse2002FromJSON(json: any): InlineResponse2002 {
    return InlineResponse2002FromJSONTyped(json, false);
}

export function InlineResponse2002FromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineResponse2002 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'greeting': !exists(json, 'greeting') ? undefined : json['greeting'],
        'date': !exists(json, 'date') ? undefined : json['date'],
        'url': !exists(json, 'url') ? undefined : json['url'],
        'headers': !exists(json, 'headers') ? undefined : json['headers'],
    };
}

export function InlineResponse2002ToJSON(value?: InlineResponse2002): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'greeting': value.greeting,
        'date': value.date,
        'url': value.url,
        'headers': value.headers,
    };
}


