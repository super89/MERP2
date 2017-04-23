import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

    _applicationPath: string;

    constructor() {
        this._applicationPath = '';
    }

    getAplicationPath() {
        return this._applicationPath;
    }

}