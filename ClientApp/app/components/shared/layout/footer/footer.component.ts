import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    selector: 'ss-footer',
    templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit() {
    }
}