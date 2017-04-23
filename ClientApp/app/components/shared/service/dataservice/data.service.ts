import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ConfigService } from '../configservice/configs.service';

@Injectable()
export class DataService {

    _aplicationPath: string;

    private _scope: any = {};
    get scope(): any {
        return this._scope;
    }
    set scope(value: any) {
        this._scope = value;
    }


    constructor(private http: Http,
        private configService: ConfigService) {
        this._aplicationPath = configService.getAplicationPath();
    }

    menuButtonClick(obj, commandName)
    {
        alert('data' + '-' + commandName + this.scope.menuType);
    }

    Add() {
        alert("Add");
    }

    Retrieve()
    {
        alert("Retrieve");
    }

    Save() {
        alert("Save");
    }

    Delete() {
        alert("Delete");
    }
}
