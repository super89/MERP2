import { CommonModule } from '@angular/common';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { Component } from '@angular/core';
import { PUBMAT03EntryComponent} from './entry/PUBMAT03.entry.component';
import { PUBMAT03ConditionComponent} from './condition/PUBMAT03.condition.component';
import { PUNMAT03QueryComponent} from './query/PUBMAT03.query.component';
import { MenuItem } from 'primeng/primeng';
import { CommandbuttonComponentComponent } from '../../shared/commandbutton/commandbutton.component';
import { DataService } from './../../shared/service/dataservice/data.service';
import { MaintainBase } from '../../shared/system/maintainBase.class';

@Component({
    selector: 'pubmat03',
    templateUrl: './PUBMAT03.component.html',
    styleUrls: ['./PUBMAT03.component.css']
})
export class PUNMAT03Component extends  MaintainBase {    

    constructor(private dataService: DataService) {
        super(dataService);
        this.scope.menuType = 'MSSVCH';
        
    }

    ngOnInit() {
        
    }
}
