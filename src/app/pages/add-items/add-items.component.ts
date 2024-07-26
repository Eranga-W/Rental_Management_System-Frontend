import { Component } from '@angular/core';
import { NavComponent } from '../../common/nav/nav.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-add-items',
  standalone: true,
  imports: [FormsModule,HttpClientModule,CommonModule,NavComponent],
  templateUrl: './add-items.component.html',
  styleUrl: './add-items.component.css'
})
export class AddItemsComponent {

  public itemObj = {
    name:"",
    rentalPerDay:"",
    finePerDay:"",
    availability:""
  }

  constructor(private http:HttpClient){}

  addItems(){
    this.http.post("http://localhost:8080/item-controller/add-item",this.itemObj).subscribe(
      (data) => {
        Swal.fire({
          title: "Item Added!",
          text: "Item Added Successfully!",
          icon: "success"
        });
      }
    )
  }

}
