import { CommonModule } from '@angular/common';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { Component } from '@angular/core';
import { PUBMAT02EntryComponent} from './entry/PUBMAT02.entry.component';
import { PUBMAT02ConditionComponent} from './condition/PUBMAT02.condition.component';
import { PUBMAT02QueryComponent} from './query/PUBMAT02.query.component';
import { MenuItem } from 'primeng/primeng';
import { CommandbuttonComponentComponent } from '../../shared/commandbutton/commandbutton.component';
import { DataService } from './../../shared/service/dataservice/data.service';
import { MaintainBase } from '../../shared/system/maintainBase.class';

@Component({
    selector: 'pubmat02',
    templateUrl: './PUBMAT02.component.html',
    styleUrls: ['./PUBMAT02.component.css']
})
export class PUBMAT02Component extends  MaintainBase {    

    constructor(private dataService: DataService) {
        super(dataService);
        this.scope.menuType = 'MSSVCH';
        
    }

    ngOnInit() {
        
    }
}
