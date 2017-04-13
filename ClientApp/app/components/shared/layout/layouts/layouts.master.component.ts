import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


@Component({
    selector: 'layouts-master',
    templateUrl: './layouts.master.component.html',
})
export class LayoutsMasterComponent implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit() {
    }
}