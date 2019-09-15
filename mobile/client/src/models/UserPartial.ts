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
 * @interface UserPartial
 */
export interface UserPartial {
    /**
     * 
     * @type {number}
     * @memberof UserPartial
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof UserPartial
     */
    avatarUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof UserPartial
     */
    username?: string;
    /**
     * 
     * @type {string}
     * @memberof UserPartial
     */
    email?: string;
}

export function UserPartialFromJSON(json: any): UserPartial {
    return UserPartialFromJSONTyped(json, false);
}

export function UserPartialFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserPartial {
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

export function UserPartialToJSON(value?: UserPartial): any {
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

