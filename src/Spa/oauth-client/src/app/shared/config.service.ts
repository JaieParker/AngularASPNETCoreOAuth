import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
 
@Injectable()
export class ConfigService {    

    constructor() {
        // "http://auth.server:5000";
    }

    get authApiURI() {
        return environment.urls.AUTH_SERVER_URLS + '/api';
    }    
     
    get resourceApiURI() {
        return environment.urls.RESOURCE_API_URLS + '/api';
    }  
}