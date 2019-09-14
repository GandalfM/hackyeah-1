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
    GarbageBin,
    GarbageBinFromJSON,
    GarbageBinToJSON,
    GarbageBinExcludingId,
    GarbageBinExcludingIdFromJSON,
    GarbageBinExcludingIdToJSON,
    GarbageBinPartial,
    GarbageBinPartialFromJSON,
    GarbageBinPartialToJSON,
    InlineResponse200,
    InlineResponse200FromJSON,
    InlineResponse200ToJSON,
} from '../models';

export interface GarbageBinControllerControllerCountRequest {
    where?: object;
}

export interface GarbageBinControllerControllerCreateRequest {
    garbageBinExcludingId?: GarbageBinExcludingId;
}

export interface GarbageBinControllerControllerDeleteByIdRequest {
    id: number;
}

export interface GarbageBinControllerControllerFindRequest {
    filter?: object;
}

export interface GarbageBinControllerControllerFindByIdRequest {
    id: number;
}

export interface GarbageBinControllerControllerReplaceByIdRequest {
    id: number;
    garbageBin?: GarbageBin;
}

export interface GarbageBinControllerControllerUpdateAllRequest {
    where?: object;
    garbageBinPartial?: GarbageBinPartial;
}

export interface GarbageBinControllerControllerUpdateByIdRequest {
    id: number;
    garbageBinPartial?: GarbageBinPartial;
}

/**
 * no description
 */
export class GarbageBinControllerControllerApi extends runtime.BaseAPI {

    /**
     */
    async garbageBinControllerControllerCountRaw(requestParameters: GarbageBinControllerControllerCountRequest): Promise<runtime.ApiResponse<InlineResponse200>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.where !== undefined) {
            queryParameters['where'] = requestParameters.where;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/garbage-bins/count`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse200FromJSON(jsonValue));
    }

   /**
    */
    async garbageBinControllerControllerCount(requestParameters: GarbageBinControllerControllerCountRequest): Promise<InlineResponse200> {
        const response = await this.garbageBinControllerControllerCountRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async garbageBinControllerControllerCreateRaw(requestParameters: GarbageBinControllerControllerCreateRequest): Promise<runtime.ApiResponse<GarbageBin>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/garbage-bins`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: GarbageBinExcludingIdToJSON(requestParameters.garbageBinExcludingId),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GarbageBinFromJSON(jsonValue));
    }

   /**
    */
    async garbageBinControllerControllerCreate(requestParameters: GarbageBinControllerControllerCreateRequest): Promise<GarbageBin> {
        const response = await this.garbageBinControllerControllerCreateRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async garbageBinControllerControllerDeleteByIdRaw(requestParameters: GarbageBinControllerControllerDeleteByIdRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling garbageBinControllerControllerDeleteById.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/garbage-bins/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

   /**
    */
    async garbageBinControllerControllerDeleteById(requestParameters: GarbageBinControllerControllerDeleteByIdRequest): Promise<void> {
        await this.garbageBinControllerControllerDeleteByIdRaw(requestParameters);
    }

    /**
     */
    async garbageBinControllerControllerFindRaw(requestParameters: GarbageBinControllerControllerFindRequest): Promise<runtime.ApiResponse<Array<GarbageBin>>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.filter !== undefined) {
            queryParameters['filter'] = requestParameters.filter;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/garbage-bins`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GarbageBinFromJSON));
    }

   /**
    */
    async garbageBinControllerControllerFind(requestParameters: GarbageBinControllerControllerFindRequest): Promise<Array<GarbageBin>> {
        const response = await this.garbageBinControllerControllerFindRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async garbageBinControllerControllerFindByIdRaw(requestParameters: GarbageBinControllerControllerFindByIdRequest): Promise<runtime.ApiResponse<GarbageBin>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling garbageBinControllerControllerFindById.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/garbage-bins/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GarbageBinFromJSON(jsonValue));
    }

   /**
    */
    async garbageBinControllerControllerFindById(requestParameters: GarbageBinControllerControllerFindByIdRequest): Promise<GarbageBin> {
        const response = await this.garbageBinControllerControllerFindByIdRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async garbageBinControllerControllerReplaceByIdRaw(requestParameters: GarbageBinControllerControllerReplaceByIdRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling garbageBinControllerControllerReplaceById.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/garbage-bins/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: GarbageBinToJSON(requestParameters.garbageBin),
        });

        return new runtime.VoidApiResponse(response);
    }

   /**
    */
    async garbageBinControllerControllerReplaceById(requestParameters: GarbageBinControllerControllerReplaceByIdRequest): Promise<void> {
        await this.garbageBinControllerControllerReplaceByIdRaw(requestParameters);
    }

    /**
     */
    async garbageBinControllerControllerUpdateAllRaw(requestParameters: GarbageBinControllerControllerUpdateAllRequest): Promise<runtime.ApiResponse<InlineResponse200>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.where !== undefined) {
            queryParameters['where'] = requestParameters.where;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/garbage-bins`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: GarbageBinPartialToJSON(requestParameters.garbageBinPartial),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse200FromJSON(jsonValue));
    }

   /**
    */
    async garbageBinControllerControllerUpdateAll(requestParameters: GarbageBinControllerControllerUpdateAllRequest): Promise<InlineResponse200> {
        const response = await this.garbageBinControllerControllerUpdateAllRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async garbageBinControllerControllerUpdateByIdRaw(requestParameters: GarbageBinControllerControllerUpdateByIdRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling garbageBinControllerControllerUpdateById.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/garbage-bins/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: GarbageBinPartialToJSON(requestParameters.garbageBinPartial),
        });

        return new runtime.VoidApiResponse(response);
    }

   /**
    */
    async garbageBinControllerControllerUpdateById(requestParameters: GarbageBinControllerControllerUpdateByIdRequest): Promise<void> {
        await this.garbageBinControllerControllerUpdateByIdRaw(requestParameters);
    }

}
