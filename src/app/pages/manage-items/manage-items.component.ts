import { Component } from '@angular/core';
import { NavComponent } from '../../common/nav/nav.component';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-items',
  standalone: true,
  imports: [FormsModule,HttpClientModule,CommonModule,NavComponent],
  templateUrl: './manage-items.component.html',
  styleUrl: './manage-items.component.css'
})
export class ManageItemsComponent {

  public itemsList:any;

  constructor(private http:HttpClient){
    this.loadItemsTable();
  }

  loadItemsTable(){
    this.http.get("http://localhost:8080/item-controller/get-all").subscribe(res =>{
      this.itemsList=res;
    })
  }

  deleteItem(item:any){
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
        this.http.delete(`http://localhost:8080/item-controller/delete-item/${item.id}`,{responseType:'text'}).subscribe(res=>{
          this.loadItemsTable();
        })
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }

  public selectedItem: any = {
    "id": null,
    "name": null,
    "rentalPerDay": null,
    "finePerDay": null,
    "availability":null
  };

  updateItem(item:any){
    if(item!=null){
      this.selectedItem = item;
    }
  }

  saveUpdatedItem(){
    this.http.post("http://localhost:8080/item-controller/update-item",this.selectedItem).subscribe(res => {
      Swal.fire({
        title: "Item Updated!",
        text: "Item Updated Successfully!",
        icon: "success"
      });
    })
  }
}
