import { Component,ViewEncapsulation  } from '@angular/core';
import { TabMenuModule, MenuItem } from 'primeng/primeng';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    encapsulation: ViewEncapsulation.None
})
export class HomeComponent {

    private items: MenuItem[];

    ngOnInit() {
        this.items = [
            { label: 'Stats', icon: 'fa-bar-chart' },
            { label: 'Calendar', icon: 'fa-calendar' },
            { label: 'Documentation', icon: 'fa-book' },
            { label: 'Support', icon: 'fa-support' },
            { label: 'Social', icon: 'fa-twitter' }
        ];
    }

}
