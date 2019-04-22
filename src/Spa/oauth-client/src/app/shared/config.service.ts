import { Injectable } from '@angular/core';
 
@Injectable()
export class ConfigService {    

    constructor() {}

    get authApiURI() {
        return 'http://auth.server:5000/api';
    }    
     
    get resourceApiURI() {
        return 'http://resouce.api:5050/api';
    }  
}