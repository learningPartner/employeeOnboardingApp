import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { EmployeeService } from '../../core/services/employee.service';
import { NgFor, NgIf } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-list',
  imports: [NgFor, ReactiveFormsModule,NgIf],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {
  employeeList: any[] = [];
  isLoading: boolean = false;

  http = inject(HttpClient);
  employeeService = inject(EmployeeService);

  employeeData: FormGroup = new FormGroup({
    employeeId: new FormControl(0),
    fullName: new FormControl(""),
    email: new FormControl(""),
    mobile: new FormControl(""),
    gender: new FormControl(""),

  })

  ngOnInit(): void {
    this.getUsers();
    this.getEmployeeList();

  }
  getUsers() {
    this.http.get("https://api.freeprojectapi.com/api/UserApp/GetAllUsers").subscribe(result => {

    }, error => {

    })
  }
  onEdit(item:any){
 this.employeeData = new FormGroup({
    employeeId: new FormControl(item.employeeId),
    fullName: new FormControl(item.fullName),
    email: new FormControl(item.email),
    mobile: new FormControl(item.mobile),
    gender: new FormControl(item.gender),

  })
  }
  onDelete(id:number){
    this.http.delete ("https://motopartz.gerasim.in/api/Employee/" +id).subscribe((res:any)=>{
if(res.result){
alert("record deleted successfully")
this.getEmployeeList()
}else{
  alert("no record deleted successfully")
}
    })
  }
  saveUser() {
    debugger
    const empobj = this.employeeData.value
    this.http.post("https://motopartz.gerasim.in/api/Employee/create", empobj).subscribe((res: any) => {
      if (res.result) {
        alert("user created successfully")
        this.getEmployeeList()
      } else {
        alert("user not created")
      }
    })
  }
//   updateUser() {
// this.http.put("https://motopartz.gerasim.in/api/Employee/update/100",).subscribe((res:any){

// })
//   }
updateUser() {
  const empobj = this.employeeData.value;
  this.http.put(`https://motopartz.gerasim.in/api/Employee/update/${empobj.employeeId}`, empobj)
    .subscribe((res: any) => {
      if (res.result) {
        alert("User updated successfully");
        this.getEmployeeList();
      } else {
        alert("User not updated");
      }
    });
}

  

  getEmployeeList() {
    this.isLoading = true;
    this.employeeService.getEmployeeList()
      .subscribe((data: any) => {
        if (data && data.length > 0) {
          this.employeeList = data;
        } else {
          this.employeeList = [];
        }
        this.isLoading = false;
      }, (err) => {
        console.log('error fetching employee list');
        this.isLoading = false;
      })
  }
}
