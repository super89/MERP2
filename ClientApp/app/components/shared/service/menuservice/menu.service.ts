import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ConfigService } from '../configservice/configs.service';
import { TreeNode } from 'primeng/primeng';

@Injectable()
export class NodeService {

    constructor(private http: Http) { }

    getFiles() {
        return this.http.get('/api/Menu/Nodes').map(result => result.json());
    }

    getMenus() {
        return this.http.get('/api/Menu/Menus').map(result => result.json());
    }
}
