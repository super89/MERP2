import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
//import { MenuItem } from 'primeng/primeng';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { TreeNode } from 'primeng/primeng';
import { NodeService } from '../../service/menuservice/menu.service';
import { Http, Response, Headers } from '@angular/http';
import { MenuItem } from 'primeng/primeng';

@Component({
    selector: 'ss-nav',
    templateUrl: './nav.component.html',
})
export class NAVComponent implements OnInit {

    constructor(private router: Router, private nodeService: NodeService, private http: Http) {
    }

    private files: TreeNode[];

    selectedFile: TreeNode;

    private items: MenuItem[];

    ngOnInit() {

        this.nodeService.getFiles().subscribe(result => {
            this.files = <TreeNode[]>result;
        });

        this.nodeService.getMenus().subscribe(result => {
            this.items = <MenuItem[]>result;
        });
    }

    nodeSelect() {
        //alert(this.selectedFile.data);
        //this.router = Router;
        if (this.selectedFile.data != "") {
            this.router.navigateByUrl(this.selectedFile.data);
        }
    }

    onNodeUnselect() {
        
    }
}
