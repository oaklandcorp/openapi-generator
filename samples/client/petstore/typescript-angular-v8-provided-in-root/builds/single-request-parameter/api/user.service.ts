/**
 * OpenAPI Petstore
 * This is a sample server Petstore server. For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent, HttpParameterCodec }       from '@angular/common/http';
import { CustomHttpParameterCodec }                          from '../encoder';
import { Observable }                                        from 'rxjs';

import { User } from '../model/user';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


export interface CreateUserRequestParams {
    body: User;
}

export interface CreateUsersWithArrayInputRequestParams {
    body: Array<User>;
}

export interface CreateUsersWithListInputRequestParams {
    body: Array<User>;
}

export interface DeleteUserRequestParams {
    username: string;
}

export interface GetUserByNameRequestParams {
    username: string;
}

export interface LoginUserRequestParams {
    username: string;
    password: string;
}

export interface UpdateUserRequestParams {
    username: string;
    body: User;
}


@Injectable({
  providedIn: 'root'
})
export class UserService {

    protected basePath = 'http://petstore.swagger.io/v2';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    public encoder: HttpParameterCodec;

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
    }



    /**
     * Create user
     * This can only be done by the logged in user.
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createUser(requestParameters: CreateUserRequestParams, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public createUser(requestParameters: CreateUserRequestParams, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public createUser(requestParameters: CreateUserRequestParams, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public createUser(requestParameters: CreateUserRequestParams, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        const body = requestParameters.body;
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling createUser.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        let responseType: string = undefined;
        if(httpHeaderAcceptSelected !== undefined) {
            responseType = httpHeaderAcceptSelected.startsWith('text') ? 'text' : 'json';
        }

        const httpClientParams: any = {
            responseType: responseType,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        }

        return this.httpClient.post<any>(`${this.configuration.basePath}/user`,
            body,
            httpClientParams
        );
    }

    /**
     * Creates list of users with given input array
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createUsersWithArrayInput(requestParameters: CreateUsersWithArrayInputRequestParams, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public createUsersWithArrayInput(requestParameters: CreateUsersWithArrayInputRequestParams, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public createUsersWithArrayInput(requestParameters: CreateUsersWithArrayInputRequestParams, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public createUsersWithArrayInput(requestParameters: CreateUsersWithArrayInputRequestParams, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        const body = requestParameters.body;
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling createUsersWithArrayInput.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        let responseType: string = undefined;
        if(httpHeaderAcceptSelected !== undefined) {
            responseType = httpHeaderAcceptSelected.startsWith('text') ? 'text' : 'json';
        }

        const httpClientParams: any = {
            responseType: responseType,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        }

        return this.httpClient.post<any>(`${this.configuration.basePath}/user/createWithArray`,
            body,
            httpClientParams
        );
    }

    /**
     * Creates list of users with given input array
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createUsersWithListInput(requestParameters: CreateUsersWithListInputRequestParams, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public createUsersWithListInput(requestParameters: CreateUsersWithListInputRequestParams, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public createUsersWithListInput(requestParameters: CreateUsersWithListInputRequestParams, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public createUsersWithListInput(requestParameters: CreateUsersWithListInputRequestParams, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        const body = requestParameters.body;
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling createUsersWithListInput.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        let responseType: string = undefined;
        if(httpHeaderAcceptSelected !== undefined) {
            responseType = httpHeaderAcceptSelected.startsWith('text') ? 'text' : 'json';
        }

        const httpClientParams: any = {
            responseType: responseType,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        }

        return this.httpClient.post<any>(`${this.configuration.basePath}/user/createWithList`,
            body,
            httpClientParams
        );
    }

    /**
     * Delete user
     * This can only be done by the logged in user.
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteUser(requestParameters: DeleteUserRequestParams, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteUser(requestParameters: DeleteUserRequestParams, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteUser(requestParameters: DeleteUserRequestParams, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteUser(requestParameters: DeleteUserRequestParams, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        const username = requestParameters.username;
        if (username === null || username === undefined) {
            throw new Error('Required parameter username was null or undefined when calling deleteUser.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        let responseType: string = undefined;
        if(httpHeaderAcceptSelected !== undefined) {
            responseType = httpHeaderAcceptSelected.startsWith('text') ? 'text' : 'json';
        }

        const httpClientParams: any = {
            responseType: responseType,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        }

        return this.httpClient.delete<any>(`${this.configuration.basePath}/user/${encodeURIComponent(String(username))}`,
            httpClientParams
        );
    }

    /**
     * Get user by user name
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getUserByName(requestParameters: GetUserByNameRequestParams, observe?: 'body', reportProgress?: boolean): Observable<User>;
    public getUserByName(requestParameters: GetUserByNameRequestParams, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<User>>;
    public getUserByName(requestParameters: GetUserByNameRequestParams, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<User>>;
    public getUserByName(requestParameters: GetUserByNameRequestParams, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        const username = requestParameters.username;
        if (username === null || username === undefined) {
            throw new Error('Required parameter username was null or undefined when calling getUserByName.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/xml',
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        let responseType: string = undefined;
        if(httpHeaderAcceptSelected !== undefined) {
            responseType = httpHeaderAcceptSelected.startsWith('text') ? 'text' : 'json';
        }

        const httpClientParams: any = {
            responseType: responseType,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        }

        return this.httpClient.get<User>(`${this.configuration.basePath}/user/${encodeURIComponent(String(username))}`,
            httpClientParams
        );
    }

    /**
     * Logs user into the system
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public loginUser(requestParameters: LoginUserRequestParams, observe?: 'body', reportProgress?: boolean): Observable<string>;
    public loginUser(requestParameters: LoginUserRequestParams, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<string>>;
    public loginUser(requestParameters: LoginUserRequestParams, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<string>>;
    public loginUser(requestParameters: LoginUserRequestParams, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        const username = requestParameters.username;
        if (username === null || username === undefined) {
            throw new Error('Required parameter username was null or undefined when calling loginUser.');
        }
        const password = requestParameters.password;
        if (password === null || password === undefined) {
            throw new Error('Required parameter password was null or undefined when calling loginUser.');
        }

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (username !== undefined && username !== null) {
            queryParameters = queryParameters.set('username', <any>username);
        }
        if (password !== undefined && password !== null) {
            queryParameters = queryParameters.set('password', <any>password);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/xml',
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        let responseType: string = undefined;
        if(httpHeaderAcceptSelected !== undefined) {
            responseType = httpHeaderAcceptSelected.startsWith('text') ? 'text' : 'json';
        }

        const httpClientParams: any = {
            params: queryParameters,
            responseType: responseType,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        }

        return this.httpClient.get<string>(`${this.configuration.basePath}/user/login`,
            httpClientParams
        );
    }

    /**
     * Logs out current logged in user session
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public logoutUser(observe?: 'body', reportProgress?: boolean): Observable<any>;
    public logoutUser(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public logoutUser(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public logoutUser(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        let responseType: string = undefined;
        if(httpHeaderAcceptSelected !== undefined) {
            responseType = httpHeaderAcceptSelected.startsWith('text') ? 'text' : 'json';
        }

        const httpClientParams: any = {
            responseType: responseType,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        }

        return this.httpClient.get<any>(`${this.configuration.basePath}/user/logout`,
            httpClientParams
        );
    }

    /**
     * Updated user
     * This can only be done by the logged in user.
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateUser(requestParameters: UpdateUserRequestParams, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public updateUser(requestParameters: UpdateUserRequestParams, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public updateUser(requestParameters: UpdateUserRequestParams, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public updateUser(requestParameters: UpdateUserRequestParams, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        const username = requestParameters.username;
        if (username === null || username === undefined) {
            throw new Error('Required parameter username was null or undefined when calling updateUser.');
        }
        const body = requestParameters.body;
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updateUser.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        let responseType: string = undefined;
        if(httpHeaderAcceptSelected !== undefined) {
            responseType = httpHeaderAcceptSelected.startsWith('text') ? 'text' : 'json';
        }

        const httpClientParams: any = {
            responseType: responseType,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        }

        return this.httpClient.put<any>(`${this.configuration.basePath}/user/${encodeURIComponent(String(username))}`,
            body,
            httpClientParams
        );
    }

}
