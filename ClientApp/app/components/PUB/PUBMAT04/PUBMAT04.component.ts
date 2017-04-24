import { CommonModule } from '@angular/common';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { Component } from '@angular/core';
import { PUBMAT04EntryComponent} from './entry/PUBMAT04.entry.component';
import { PUBMAT04ConditionComponent} from './condition/PUBMAT04.condition.component';
import { PUBMAT04QueryComponent} from './query/PUBMAT04.query.component';
import { MenuItem } from 'primeng/primeng';
import { CommandbuttonComponentComponent } from '../../shared/commandbutton/commandbutton.component';
import { DataService } from './../../shared/service/dataservice/data.service';
import { MaintainBase } from '../../shared/system/maintainBase.class';

@Component({
    selector: 'pubmat04',
    templateUrl: './PUBMAT04.component.html',
    styleUrls: ['./PUBMAT04.component.css']
})
export class PUBMAT04Component extends  MaintainBase {    

    constructor(private dataService: DataService) {
        super(dataService);
        this.scope.menuType = 'MSSVCH';
        
    }

    ngOnInit() {
        
    }
}
