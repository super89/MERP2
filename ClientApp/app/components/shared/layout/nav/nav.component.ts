import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    selector: 'ss-nav',
    templateUrl: './nav.component.html',
})
export class NAVComponent implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit() {
    }
}