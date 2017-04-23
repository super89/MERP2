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
        //return this.http.get('/api/Menu/Nodes').subscribe(result => {
        //    <TreeNode[]>result.json();
        //});
        return this.http.get('/api/Menu/Nodes').map(result => result.json());
    }
}

        //var filesjson = [
        //    {
        //        "label": "Documents",
        //        "data": "Documents Folder",
        //        "expandedIcon": "fa-folder-open",
        //        "collapsedIcon": "fa-folder",
        //        "children": [{
        //            "label": "Work",
        //            "data": "Work Folder",
        //            "expandedIcon": "fa-folder-open",
        //            "collapsedIcon": "fa-folder",
        //            "children": [{ "label": "Expenses.doc", "icon": "fa-file-word-o", "data": "Expenses Document" }, { "label": "Resume.doc", "icon": "fa-file-word-o", "data": "Resume Document" }]
        //        },
        //        {
        //            "label": "Home",
        //            "data": "Home Folder",
        //            "expandedIcon": "fa-folder-open",
        //            "collapsedIcon": "fa-folder",
        //            "children": [{ "label": "Invoices.txt", "icon": "fa-file-word-o", "data": "Invoices for this month" }]
        //        }]
        //    },
        //    {
        //        "label": "Pictures",
        //        "data": "Pictures Folder",
        //        "expandedIcon": "fa-folder-open",
        //        "collapsedIcon": "fa-folder",
        //        "children": [
        //            { "label": "barcelona.jpg", "icon": "fa-file-image-o", "data": "Barcelona Photo" },
        //            { "label": "logo.jpg", "icon": "fa-file-image-o", "data": "PrimeFaces Logo" },
        //            { "label": "primeui.png", "icon": "fa-file-image-o", "data": "PrimeUI Logo" }]
        //    },
        //    {
        //        "label": "Movies",
        //        "data": "Movies Folder",
        //        "expandedIcon": "fa-folder-open",
        //        "collapsedIcon": "fa-folder",
        //        "children": [{
        //            "label": "Al Pacino",
        //            "data": "Pacino Movies",
        //            "children": [{ "label": "Scarface", "icon": "fa-file-video-o", "data": "Scarface Movie" }, { "label": "Serpico", "icon": "fa-file-video-o", "data": "Serpico Movie" }]
        //        },
        //        {
        //            "label": "Robert De Niro",
        //            "data": "De Niro Movies",
        //            "children": [{ "label": "Goodfellas", "icon": "fa-file-video-o", "data": "Goodfellas Movie" }, { "label": "Untouchables", "icon": "fa-file-video-o", "data": "Untouchables Movie" }]
        //        }]
        //    }
        //];

        //let nodes: TreeNode[] = JSON.parse(filesjson);

        //return <TreeNode[]>filesjson;//deserialize(filesjson, <TreeNode[]>);//filesjson<TreeNode[]>//filesjson.then(res => <TreeNode[]>res.json().data);;
        //return this.http.get('showcase/resources/data/files.json')
        //    .toPromise()
        //    .then(res => <TreeNode[]>res.json().data);

        //return 
