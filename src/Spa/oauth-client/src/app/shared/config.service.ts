import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import * as process from "process";
 
@Injectable()
export class ConfigService {    

    constructor() {
        // "http://auth.server:5000";
    }

    get authApiURI() {
        var env = process && process.env ? <any>process.env : environment.urls;
        return env.AUTH_SERVER_URLS + '/api';
    }    
     
    get resourceApiURI() {
        var env = process && process.env ? <any>process.env : environment.urls;
        return env.RESOURCE_API_URLS + '/api';
    }  
}