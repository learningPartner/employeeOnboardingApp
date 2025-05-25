import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url = "https://motopartz.gerasim.in/api"
  constructor(private http : HttpClient) { }

  getEmployeeList() {
    return this.http.get(`${this.url}/Employee/all`);
  }
  createEmploy(){
        return this.http.get(`${this.url}Employee/all`);

  }
}
