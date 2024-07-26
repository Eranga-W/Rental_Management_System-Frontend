import { Routes } from '@angular/router';
import { AddItemsComponent } from './pages/add-items/add-items.component';
import { ManageItemsComponent } from './pages/manage-items/manage-items.component';
import { NavComponent } from './common/nav/nav.component';

export const routes: Routes = [
    {
        path:"app-add-items",
        component:AddItemsComponent
    },
    {
        path:"app-manage-items",
        component:ManageItemsComponent
    },
    {
        path:"app-nav",
        component:NavComponent
    }
];
