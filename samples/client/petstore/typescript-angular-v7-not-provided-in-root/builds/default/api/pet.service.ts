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

import { ApiResponse } from '../model/apiResponse';
import { Pet } from '../model/pet';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';



@Injectable()
export class PetService {

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
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Add a new pet to the store
     * @param body Pet object that needs to be added to the store
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public addPet(body: Pet, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public addPet(body: Pet, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public addPet(body: Pet, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public addPet(body: Pet, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling addPet.');
        }

        let headers = this.defaultHeaders;

        // authentication (petstore_auth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json',
            'application/xml'
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

        return this.httpClient.post<any>(`${this.configuration.basePath}/pet`,
            body,
            httpClientParams
        );
    }

    /**
     * Deletes a pet
     * @param petId Pet id to delete
     * @param apiKey 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deletePet(petId: number, apiKey?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deletePet(petId: number, apiKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deletePet(petId: number, apiKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deletePet(petId: number, apiKey?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (petId === null || petId === undefined) {
            throw new Error('Required parameter petId was null or undefined when calling deletePet.');
        }

        let headers = this.defaultHeaders;
        if (apiKey !== undefined && apiKey !== null) {
            headers = headers.set('api_key', String(apiKey));
        }

        // authentication (petstore_auth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

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

        return this.httpClient.delete<any>(`${this.configuration.basePath}/pet/${encodeURIComponent(String(petId))}`,
            httpClientParams
        );
    }

    /**
     * Finds Pets by status
     * Multiple status values can be provided with comma separated strings
     * @param status Status values that need to be considered for filter
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findPetsByStatus(status: Array<'available' | 'pending' | 'sold'>, observe?: 'body', reportProgress?: boolean): Observable<Array<Pet>>;
    public findPetsByStatus(status: Array<'available' | 'pending' | 'sold'>, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Pet>>>;
    public findPetsByStatus(status: Array<'available' | 'pending' | 'sold'>, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Pet>>>;
    public findPetsByStatus(status: Array<'available' | 'pending' | 'sold'>, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (status === null || status === undefined) {
            throw new Error('Required parameter status was null or undefined when calling findPetsByStatus.');
        }

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (status) {
            queryParameters = queryParameters.set('status', status.join(COLLECTION_FORMATS['csv']));
        }

        let headers = this.defaultHeaders;

        // authentication (petstore_auth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

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

        return this.httpClient.get<Array<Pet>>(`${this.configuration.basePath}/pet/findByStatus`,
            httpClientParams
        );
    }

    /**
     * Finds Pets by tags
     * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
     * @param tags Tags to filter by
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findPetsByTags(tags: Array<string>, observe?: 'body', reportProgress?: boolean): Observable<Array<Pet>>;
    public findPetsByTags(tags: Array<string>, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Pet>>>;
    public findPetsByTags(tags: Array<string>, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Pet>>>;
    public findPetsByTags(tags: Array<string>, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (tags === null || tags === undefined) {
            throw new Error('Required parameter tags was null or undefined when calling findPetsByTags.');
        }

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (tags) {
            queryParameters = queryParameters.set('tags', tags.join(COLLECTION_FORMATS['csv']));
        }

        let headers = this.defaultHeaders;

        // authentication (petstore_auth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

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

        return this.httpClient.get<Array<Pet>>(`${this.configuration.basePath}/pet/findByTags`,
            httpClientParams
        );
    }

    /**
     * Find pet by ID
     * Returns a single pet
     * @param petId ID of pet to return
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPetById(petId: number, observe?: 'body', reportProgress?: boolean): Observable<Pet>;
    public getPetById(petId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Pet>>;
    public getPetById(petId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Pet>>;
    public getPetById(petId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (petId === null || petId === undefined) {
            throw new Error('Required parameter petId was null or undefined when calling getPetById.');
        }

        let headers = this.defaultHeaders;

        // authentication (api_key) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["api_key"]) {
            headers = headers.set('api_key', this.configuration.apiKeys["api_key"]);
        }

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

        return this.httpClient.get<Pet>(`${this.configuration.basePath}/pet/${encodeURIComponent(String(petId))}`,
            httpClientParams
        );
    }

    /**
     * Update an existing pet
     * @param body Pet object that needs to be added to the store
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updatePet(body: Pet, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public updatePet(body: Pet, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public updatePet(body: Pet, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public updatePet(body: Pet, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updatePet.');
        }

        let headers = this.defaultHeaders;

        // authentication (petstore_auth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json',
            'application/xml'
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

        return this.httpClient.put<any>(`${this.configuration.basePath}/pet`,
            body,
            httpClientParams
        );
    }

    /**
     * Updates a pet in the store with form data
     * @param petId ID of pet that needs to be updated
     * @param name Updated name of the pet
     * @param status Updated status of the pet
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updatePetWithForm(petId: number, name?: string, status?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public updatePetWithForm(petId: number, name?: string, status?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public updatePetWithForm(petId: number, name?: string, status?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public updatePetWithForm(petId: number, name?: string, status?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (petId === null || petId === undefined) {
            throw new Error('Required parameter petId was null or undefined when calling updatePetWithForm.');
        }

        let headers = this.defaultHeaders;

        // authentication (petstore_auth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/x-www-form-urlencoded'
        ];

        const canConsumeForm = this.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any; };
        let useForm = false;
        let convertFormParamsToString = false;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new HttpParams({encoder: this.encoder});
        }

        if (name !== undefined) {
            formParams = formParams.append('name', <any>name) as any || formParams;
        }
        if (status !== undefined) {
            formParams = formParams.append('status', <any>status) as any || formParams;
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

        return this.httpClient.post<any>(`${this.configuration.basePath}/pet/${encodeURIComponent(String(petId))}`,
            convertFormParamsToString ? formParams.toString() : formParams,
            httpClientParams
        );
    }

    /**
     * uploads an image
     * @param petId ID of pet to update
     * @param additionalMetadata Additional data to pass to server
     * @param file file to upload
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public uploadFile(petId: number, additionalMetadata?: string, file?: Blob, observe?: 'body', reportProgress?: boolean): Observable<ApiResponse>;
    public uploadFile(petId: number, additionalMetadata?: string, file?: Blob, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ApiResponse>>;
    public uploadFile(petId: number, additionalMetadata?: string, file?: Blob, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ApiResponse>>;
    public uploadFile(petId: number, additionalMetadata?: string, file?: Blob, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (petId === null || petId === undefined) {
            throw new Error('Required parameter petId was null or undefined when calling uploadFile.');
        }

        let headers = this.defaultHeaders;

        // authentication (petstore_auth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'multipart/form-data'
        ];

        const canConsumeForm = this.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any; };
        let useForm = false;
        let convertFormParamsToString = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        // see https://stackoverflow.com/questions/4007969/application-x-www-form-urlencoded-or-multipart-form-data
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new HttpParams({encoder: this.encoder});
        }

        if (additionalMetadata !== undefined) {
            formParams = formParams.append('additionalMetadata', <any>additionalMetadata) as any || formParams;
        }
        if (file !== undefined) {
            formParams = formParams.append('file', <any>file) as any || formParams;
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

        return this.httpClient.post<ApiResponse>(`${this.configuration.basePath}/pet/${encodeURIComponent(String(petId))}/uploadImage`,
            convertFormParamsToString ? formParams.toString() : formParams,
            httpClientParams
        );
    }

}
