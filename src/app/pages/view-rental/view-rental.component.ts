import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavComponent } from '../../common/nav/nav.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-rental',
  standalone: true,
  imports: [FormsModule,HttpClientModule,CommonModule,NavComponent],
  templateUrl: './view-rental.component.html',
  styleUrl: './view-rental.component.css'
})
export class ViewRentalComponent {
  public rentalList:any;

  constructor(private http:HttpClient){
    this.loadRentalTable();
  }

  loadRentalTable(){
    this.http.get("http://localhost:8080/rental-controller/get-all").subscribe(res =>{
      this.rentalList=res;
    })
  }

  deleteRental(rental:any){
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this action!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.delete(`http://localhost:8080/rental-controller/delete-rental/${rental.id}`,{responseType:'text'}).subscribe(res=>{
          this.loadRentalTable();
        })
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }

  public selectedRental: any = {
    "id": null,
    "custName": null,
    "itemName": null,
    "rentalDate": null,
    "returnDate":null,
    "dueDate": null,
    "fine": null,
    "totalCost": null
  };

  updateRental(item:any){
    if(item!=null){
      this.selectedRental = item;
    }
  }

  saveUpdatedRental(){
    this.http.post("http://localhost:8080/rental-controller/update-rental",this.selectedRental).subscribe(res => {
      Swal.fire({
        title: "Rental Updated!",
        text: "Rental Updated Successfully!",
        icon: "success"
      });
    })
  }

  showRental(item:any){
    if(item!=null){
      this.selectedRental = item;
    }
  }
}
