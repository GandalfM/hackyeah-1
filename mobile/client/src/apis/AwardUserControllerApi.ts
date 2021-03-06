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
    InlineResponse200,
    InlineResponse200FromJSON,
    InlineResponse200ToJSON,
    User,
    UserFromJSON,
    UserToJSON,
} from '../models';

export interface AwardUserControllerGetUserRequest {
    id: number;
}

export interface AwardUserControllerGetUserSummaryRequest {
    id: number;
}

/**
 * no description
 */
export class AwardUserControllerApi extends runtime.BaseAPI {

    /**
     */
    async awardUserControllerGetTopTenUsersRaw(): Promise<runtime.ApiResponse<Array<object>>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/awards/user/top`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse<any>(response);
    }

   /**
    */
    async awardUserControllerGetTopTenUsers(): Promise<Array<object>> {
        const response = await this.awardUserControllerGetTopTenUsersRaw();
        return await response.value();
    }

    /**
     */
    async awardUserControllerGetUserRaw(requestParameters: AwardUserControllerGetUserRequest): Promise<runtime.ApiResponse<Array<User>>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling awardUserControllerGetUser.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/awards/{id}/user`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(UserFromJSON));
    }

   /**
    */
    async awardUserControllerGetUser(requestParameters: AwardUserControllerGetUserRequest): Promise<Array<User>> {
        const response = await this.awardUserControllerGetUserRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async awardUserControllerGetUserSummaryRaw(requestParameters: AwardUserControllerGetUserSummaryRequest): Promise<runtime.ApiResponse<InlineResponse200>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling awardUserControllerGetUserSummary.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/awards/{id}/user/summary`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse200FromJSON(jsonValue));
    }

   /**
    */
    async awardUserControllerGetUserSummary(requestParameters: AwardUserControllerGetUserSummaryRequest): Promise<InlineResponse200> {
        const response = await this.awardUserControllerGetUserSummaryRaw(requestParameters);
        return await response.value();
    }

}
