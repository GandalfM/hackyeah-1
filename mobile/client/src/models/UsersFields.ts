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
 * @interface UsersFields
 */
export interface UsersFields {
    /**
     * 
     * @type {boolean}
     * @memberof UsersFields
     */
    id?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UsersFields
     */
    avatarUrl?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UsersFields
     */
    username?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UsersFields
     */
    email?: boolean;
}

export function UsersFieldsFromJSON(json: any): UsersFields {
    return UsersFieldsFromJSONTyped(json, false);
}

export function UsersFieldsFromJSONTyped(json: any, ignoreDiscriminator: boolean): UsersFields {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'avatarUrl': !exists(json, 'avatarUrl') ? undefined : json['avatarUrl'],
        'username': !exists(json, 'username') ? undefined : json['username'],
        'email': !exists(json, 'email') ? undefined : json['email'],
    };
}

export function UsersFieldsToJSON(value?: UsersFields): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'avatarUrl': value.avatarUrl,
        'username': value.username,
        'email': value.email,
    };
}


