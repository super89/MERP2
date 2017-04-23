import { Component,Input } from '@angular/core';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { MenubarModule, MenuItem } from 'primeng/primeng';
import { DataService } from '../service/dataservice/data.service';

@Component({
    selector: 'command-button',
    templateUrl: './commandbutton.component.html'
})
export class CommandbuttonComponentComponent {
    @Input() menuType: string='';
    private items: MenuItem[] = [];
    constructor(private dataService: DataService) {

    }

    itemClick(event, item: MenuItem) {
        alert(item.label)
        if (!item.url || item.routerLink) {
            event.preventDefault();
        }
    }

    MenuItemClick(obj,commandName)
    {
        //alert(commandName);
        this.dataService.menuButtonClick(obj, commandName);
    }

    private menuItemSave: MenuItem = {
        label: '儲存', visible: true, disabled: false, icon: 'fa-save', command: (event) => { this.MenuItemClick(event, 'Save'); }
    }
    private menuItemAdd: MenuItem = {
        label: '新增', visible: true, disabled: false, icon: 'fa-file-o', command: (event) => { this.MenuItemClick(event,'Add'); }
    }
    private menuItemAddDetail: MenuItem = {
        label: '新增明細', visible: true, disabled: false, icon: 'fa-indent', command: (event) => { this.MenuItemClick(event,'AddDetail'); }
    }

    private menuItemDelete: MenuItem = {
        label: '刪除', visible: true, disabled: false, icon: 'fa-trash', command: (event) => { this.MenuItemClick(event, 'Delete'); }
    }

    private menuItemQuery: MenuItem = {
        label: '查詢', visible: true, disabled: false, icon: 'fa-search', command: (event) => { this.MenuItemClick(event,'Query'); }
    }

    private menuItemCopy: MenuItem = {
        label: '複製', visible: true, disabled: false, icon: 'fa-copy', command: (event) => { this.MenuItemClick(event, 'Copy'); }
    }

    private menuItemPaste: MenuItem = {
        label: '貼上', visible: true, disabled: false, icon: 'fa-paste', command: (event) => { this.MenuItemClick(event, 'Paste'); }
    }

    private menuItemConfirm: MenuItem = {
        label: '確認', visible: true, disabled: false, icon: 'fa-check-circle', command: (event) => { this.MenuItemClick(event, 'Confirm'); }
    }

    private menuItemUnconfirm: MenuItem = {
        label: '取消確認', visible: true, disabled: false, icon: 'fa-times-circle', command: (event) => { this.MenuItemClick(event, 'Unconfirm'); }
    }

    private menuItemCancel: MenuItem = {
        label: '作廢', visible: true, disabled: false, icon: 'fa-minus-circle', command: (event) => { this.MenuItemClick(event, 'Cancel'); }
    }

    private menuItemAutoRetrieve: MenuItem = {
        label: '自動截取', visible: true, disabled: false, icon: 'fa-download', command: (event) => { this.MenuItemClick(event, 'AutoRetrieve'); }
    }

    private menuItemFirstRow: MenuItem = {
        label: '第一筆', visible: true, disabled: false, icon: 'fa-step-backward', command: (event) => { this.MenuItemClick(event, 'FirstRow'); }
    }
    private menuItemPreviousRow: MenuItem = {
        label: '上筆', visible: true, disabled: false, icon: 'fa-backward', command: (event) => { this.MenuItemClick(event, 'PreviousRow'); }
    }
    private menuItemNextRow: MenuItem = {
        label: '下筆', visible: true, disabled: false, icon: 'fa-forward', command: (event) => { this.MenuItemClick(event, 'NextRow'); }
    }
    private menuItemLastRow: MenuItem = {
        label: '最後筆', visible: true, disabled: false, icon: 'fa-step-forward', command: (event) => { this.MenuItemClick(event, 'LastRow'); }
    }

    private menuItemPrint: MenuItem = {
        label: '列印', visible: true, disabled: false, icon: 'fa-print', command: (event) => { this.MenuItemClick(event, 'Print'); }
    }

    ngOnInit() {
        if (this.menuType) {
            switch (this.menuType.toLocaleUpperCase()) {
                case "CFG":
                    this.items = [this.menuItemSave];
                    break;
                case "QUY":
                    this.items = [this.menuItemQuery, this.menuItemFirstRow, this.menuItemPreviousRow, this.menuItemLastRow, this.menuItemNextRow];
                    break;
                case "MSS":
                    this.items = [this.menuItemAdd, this.menuItemSave, this.menuItemDelete, this.menuItemQuery, this.menuItemCopy, this.menuItemPaste, this.menuItemFirstRow, this.menuItemPreviousRow, this.menuItemLastRow, this.menuItemNextRow];
                    break;
                case "MSSVCH":
                    this.items = [this.menuItemAdd, this.menuItemSave, this.menuItemDelete, this.menuItemQuery, this.menuItemCopy, this.menuItemPaste, this.menuItemFirstRow, this.menuItemPreviousRow, this.menuItemLastRow, this.menuItemNextRow, this.menuItemConfirm, this.menuItemUnconfirm, this.menuItemCancel, this.menuItemAutoRetrieve];
                    break;
                case "MMD":
                    this.items = [this.menuItemAdd, this.menuItemAddDetail, this.menuItemSave, this.menuItemDelete, this.menuItemQuery, this.menuItemCopy, this.menuItemPaste, this.menuItemFirstRow, this.menuItemPreviousRow, this.menuItemLastRow, this.menuItemNextRow];
                    break;
                case "MMDVCH":
                    this.items = [this.menuItemAdd, this.menuItemAddDetail, this.menuItemSave, this.menuItemDelete, this.menuItemQuery, this.menuItemCopy, this.menuItemPaste, this.menuItemFirstRow, this.menuItemPreviousRow, this.menuItemLastRow, this.menuItemNextRow, this.menuItemConfirm, this.menuItemUnconfirm, this.menuItemCancel, this.menuItemAutoRetrieve];
                    break;
                case "MSSCFM":
                    this.items = [this.menuItemAdd, this.menuItemAddDetail, this.menuItemSave, this.menuItemDelete, this.menuItemQuery, this.menuItemCopy, this.menuItemPaste, this.menuItemFirstRow, this.menuItemPreviousRow, this.menuItemLastRow, this.menuItemNextRow, this.menuItemConfirm, this.menuItemUnconfirm];
                    break;
                case "PRT":
                    this.items = [this.menuItemPrint];
                    break;
                default:
                    break;
            }
        }
    }

}
