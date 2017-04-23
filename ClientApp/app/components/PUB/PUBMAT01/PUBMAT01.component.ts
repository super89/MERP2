import { CommonModule } from '@angular/common';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { Component } from '@angular/core';
import { PUNMAT01EntryComponent} from './entry/PUBMAT01.entry.component';
import { PUNMAT01ConditionComponent} from './condition/PUBMAT01.condition.component';
import { PUNMAT01QueryComponent} from './query/PUBMAT01.query.component';
import { MenuItem } from 'primeng/primeng';
import { CommandbuttonComponentComponent } from '../../shared/commandbutton/commandbutton.component';
import { DataService } from './../../shared/service/dataservice/data.service';
import { MaintainBase } from '../../shared/system/maintainBase.class';

@Component({
    selector: 'pubmat01',
    templateUrl: './pubmat01.component.html',
    styleUrls: ['./pubmat01.component.css']
})
export class PUNMAT01Component extends  MaintainBase {    

    constructor(private dataService: DataService) {
        super(dataService);
        this.scope.menuType = 'MSSVCH';
        
    }

    ngOnInit() {
        
    }
}
