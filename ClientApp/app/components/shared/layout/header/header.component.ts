import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    selector: 'ss-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit() {
    }
}