import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDepartment, IDesignation } from '../models/master.model';
import { environment } from '../../../environments/environment';
import { APIMethodConstant } from '../constant/Constant';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  apiUrl: string =  environment.API_URL;

  constructor(private http: HttpClient) { }

  getDepartments() : Observable<IDepartment[]>{
    return this.http.get<IDepartment[]>(this.apiUrl + APIMethodConstant.MASTER.GET_DEPARTMENT)
  }

  getDesignationByDeptId(deptId: number): Observable<IDesignation[]> {
    return this.http.get<IDesignation[]>(this.apiUrl + APIMethodConstant.MASTER.GET_DESIGNATION_BY_ID + deptId)
  }
  
}
