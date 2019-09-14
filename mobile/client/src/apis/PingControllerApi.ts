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
    InlineResponse2001,
    InlineResponse2001FromJSON,
    InlineResponse2001ToJSON,
} from '../models';

/**
 * no description
 */
export class PingControllerApi extends runtime.BaseAPI {

    /**
     */
    async pingControllerPingRaw(): Promise<runtime.ApiResponse<InlineResponse2001>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/ping`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse2001FromJSON(jsonValue));
    }

   /**
    */
    async pingControllerPing(): Promise<InlineResponse2001> {
        const response = await this.pingControllerPingRaw();
        return await response.value();
    }

}
