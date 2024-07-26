import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavComponent } from '../../common/nav/nav.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-rental',
  standalone: true,
  imports: [FormsModule,HttpClientModule,CommonModule,NavComponent],
  templateUrl: './add-rental.component.html',
  styleUrl: './add-rental.component.css'
})
export class AddRentalComponent {
  public rentalObj = {
    custName:"",
    itemName:"",
    rentalDate:"",
    returnDate:"",
    dueDate:"",
    fine:"",
    totalCost:""
  }

  constructor(private http:HttpClient){}

  addRental(){
    this.http.post("http://localhost:8080/rental-controller/add-rental",this.rentalObj).subscribe(
      (data) => {
        Swal.fire({
          title: "Rental Details Added!",
          text: "Rental Added Successfully!",
          icon: "success"
        });
      }
    )
  }
}
