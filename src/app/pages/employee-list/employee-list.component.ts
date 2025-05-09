import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  imports: [],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {


  http = inject(HttpClient);

  ngOnInit(): void {
    this.getUsers()
  }
  getUsers() {
    // const token = localStorage.getItem('token')
    // const header =  new HttpHeaders({
    //   'Authorization':  `Bearer ${token}`
    // })
    this.http.get("https://api.freeprojectapi.com/api/UserApp/GetAllUsers").subscribe( result=>{
      debugger;
    },error=>{
      debugger;
    })
  }
}
