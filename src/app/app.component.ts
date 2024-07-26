import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddItemsComponent } from './pages/add-items/add-items.component';
import { ManageItemsComponent } from './pages/manage-items/manage-items.component';
import { NavComponent } from './common/nav/nav.component';
import { AddRentalComponent } from './pages/add-rental/add-rental.component';
import { ViewRentalComponent } from './pages/view-rental/view-rental.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AddItemsComponent,ManageItemsComponent,NavComponent,AddRentalComponent,ViewRentalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rental-app';
}
