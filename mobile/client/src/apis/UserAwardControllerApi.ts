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
    Award,
    AwardFromJSON,
    AwardToJSON,
    AwardOptionalUserIdExcludingId,
    AwardOptionalUserIdExcludingIdFromJSON,
    AwardOptionalUserIdExcludingIdToJSON,
    AwardPartial,
    AwardPartialFromJSON,
    AwardPartialToJSON,
    InlineResponse2001,
    InlineResponse2001FromJSON,
    InlineResponse2001ToJSON,
} from '../models';

export interface UserAwardControllerCreateRequest {
    id: number;
    awardOptionalUserIdExcludingId?: AwardOptionalUserIdExcludingId;
}

export interface UserAwardControllerDeleteRequest {
    id: number;
    where?: object;
}

export interface UserAwardControllerFindRequest {
    id: number;
    filter?: { [key: string]: object; };
}

export interface UserAwardControllerPatchRequest {
    id: number;
    where?: object;
    awardPartial?: AwardPartial;
}

/**
 * no description
 */
export class UserAwardControllerApi extends runtime.BaseAPI {

    /**
     */
    async userAwardControllerCreateRaw(requestParameters: UserAwardControllerCreateRequest): Promise<runtime.ApiResponse<Award>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling userAwardControllerCreate.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/users/{id}/awards`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AwardOptionalUserIdExcludingIdToJSON(requestParameters.awardOptionalUserIdExcludingId),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => AwardFromJSON(jsonValue));
    }

   /**
    */
    async userAwardControllerCreate(requestParameters: UserAwardControllerCreateRequest): Promise<Award> {
        const response = await this.userAwardControllerCreateRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async userAwardControllerDeleteRaw(requestParameters: UserAwardControllerDeleteRequest): Promise<runtime.ApiResponse<InlineResponse2001>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling userAwardControllerDelete.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.where !== undefined) {
            queryParameters['where'] = requestParameters.where;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/users/{id}/awards`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse2001FromJSON(jsonValue));
    }

   /**
    */
    async userAwardControllerDelete(requestParameters: UserAwardControllerDeleteRequest): Promise<InlineResponse2001> {
        const response = await this.userAwardControllerDeleteRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async userAwardControllerFindRaw(requestParameters: UserAwardControllerFindRequest): Promise<runtime.ApiResponse<Array<Award>>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling userAwardControllerFind.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.filter !== undefined) {
            queryParameters['filter'] = requestParameters.filter;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/users/{id}/awards`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(AwardFromJSON));
    }

   /**
    */
    async userAwardControllerFind(requestParameters: UserAwardControllerFindRequest): Promise<Array<Award>> {
        const response = await this.userAwardControllerFindRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async userAwardControllerPatchRaw(requestParameters: UserAwardControllerPatchRequest): Promise<runtime.ApiResponse<InlineResponse2001>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling userAwardControllerPatch.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.where !== undefined) {
            queryParameters['where'] = requestParameters.where;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/users/{id}/awards`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: AwardPartialToJSON(requestParameters.awardPartial),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse2001FromJSON(jsonValue));
    }

   /**
    */
    async userAwardControllerPatch(requestParameters: UserAwardControllerPatchRequest): Promise<InlineResponse2001> {
        const response = await this.userAwardControllerPatchRaw(requestParameters);
        return await response.value();
    }

}
