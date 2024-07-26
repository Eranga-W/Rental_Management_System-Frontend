import { Routes } from '@angular/router';
import { AddItemsComponent } from './pages/add-items/add-items.component';
import { ManageItemsComponent } from './pages/manage-items/manage-items.component';
import { NavComponent } from './common/nav/nav.component';
import { AddRentalComponent } from './pages/add-rental/add-rental.component';
import { ViewRentalComponent } from './pages/view-rental/view-rental.component';

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
    },
    {
        path:"app-add-rental",
        component:AddRentalComponent
    },
    {
        path:"app-view-rental",
        component:ViewRentalComponent
    }
    
];
