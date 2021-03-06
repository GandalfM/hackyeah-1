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


import * as runtime from '../runtime';
import {
    User,
    UserFromJSON,
    UserToJSON,
} from '../models';

export interface GarbageBinUserControllerGetUserRequest {
    id: number;
}

/**
 * no description
 */
export class GarbageBinUserControllerApi extends runtime.BaseAPI {

    /**
     */
    async garbageBinUserControllerGetUserRaw(requestParameters: GarbageBinUserControllerGetUserRequest): Promise<runtime.ApiResponse<Array<User>>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling garbageBinUserControllerGetUser.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/garbage-bins/{id}/user`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(UserFromJSON));
    }

   /**
    */
    async garbageBinUserControllerGetUser(requestParameters: GarbageBinUserControllerGetUserRequest): Promise<Array<User>> {
        const response = await this.garbageBinUserControllerGetUserRaw(requestParameters);
        return await response.value();
    }

}
