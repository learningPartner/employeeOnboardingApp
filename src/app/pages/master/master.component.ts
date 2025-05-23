import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-master',
  imports: [CommonModule,FormsModule],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css'
})
export class MasterComponent implements OnInit {


  isNewDept = signal<boolean>( false);

 
  http = inject(HttpClient)

  departmentList:any [] = [ 
  ];
  department = { departmentId: 0, name: '' };
  selectedDepartment: any = null;

  // Designation properties
  designationList: any[] = [];
  designation = { designationId: 0, departmentId: 0, name: '' };

  ngOnInit(): void {
    this.getDept()
  }

  getDept() {
    this.http.get("https://motopartz.gerasim.in/api/Master/departments").subscribe((Res:any)=>{
      this.departmentList = Res;
    })
  }

  getDesignByDept(id: number) {
    this.http.get("https://motopartz.gerasim.in/api/Master/GetDesignationsByDeptId?id=" +id).subscribe((RES:any)=>{
      this.designationList =  RES;
    })
  }

   toggleDeptFrom() {
    this.department = { departmentId: 0, name: '' };
    this.isNewDept.set(!this.isNewDept())
  }
  
  // Select a department from the list
  selectDepartment(dept: any) {
    this.selectedDepartment = dept;
    this.getDesignByDept(dept.departmentId);
    this.resetDesignationForm();
  }

  // ----- Department CRUD -----

  openAddDepartment() {
    this.department = { departmentId: 0, name: '' };
  }
  

  editDepartment(dept: any) {
    this.department = { ...dept };
    if(this.department.departmentId != 0 && !this.isNewDept()) {
       this.isNewDept.set(true)
    }
   
  }

  onSaveUpdateDept() {
    if (this.department.departmentId === 0) {
      // Add new
      this.http.post("https://motopartz.gerasim.in/api/Master/departments",this.department).subscribe({
        next:() => {
          alert("Save Success");
          this.department = {departmentId: 0, name: '' };
          this.getDept()
        },
        error:() => {
          alert("API Error")
        }
      })
    } else {
      // Update existing
      //const index = this.departmentList.findIndex(d => d.departmentId === this.department.departmentId);
      // if (index !== -1) {
      //   this.departmentList[index] = { ...this.department };
      // }
    }
    this.department = { departmentId: 0, name: '' };
  }

  deleteDepartment(id: number) {
    this.departmentList = this.departmentList.filter(d => d.departmentId !== id);
    if (this.selectedDepartment?.departmentId === id) {
      this.selectedDepartment = null;
      this.designationList = [];
    }
  }

  // ----- Designation CRUD -----

  openAddDesignation() {
    this.resetDesignationForm();
  }

  editDesignation(des: any) {
    this.designation = { ...des };
  }

  saveDesignation() {
    this.designation.departmentId = this.selectedDepartment.departmentId;

    if (this.designation.designationId === 0) {
      // Add new
      
     this.http.post("https://motopartz.gerasim.in/api/Master/designations",this.designation).subscribe({
        next:() => {
          alert("Save Success");
          this.designation = {departmentId: 0, name: '' ,designationId: 0};
          this.getDesignByDept(this.selectedDepartment.departmentId)
        },
        error:() => {
          alert("API Error")
        }
      })
    } else {
      // Update existing
      const index = this.designationList.findIndex(d => d.designationId === this.designation.designationId);
      if (index !== -1) {
        this.designationList[index] = { ...this.designation };
      }
    }

    this.resetDesignationForm();
  }

  deleteDesignation(id: number) {
    this.designationList = this.designationList.filter(d => d.designationId !== id);
  }

  loadDesignationsForDepartment(deptId: number) {
    // Simulated designation data (filter from global store or call API in real apps)
    const allDesignations = [
      { designationId: 1, departmentId: 1, name: 'HR Manager' },
      { designationId: 2, departmentId: 1, name: 'Recruiter' },
      { designationId: 3, departmentId: 2, name: 'Developer' },
      { designationId: 4, departmentId: 2, name: 'Tester' }
    ];

    this.designationList = allDesignations.filter(d => d.departmentId === deptId);
  }

  resetDesignationForm() {
    this.designation = { designationId: 0, departmentId: 0, name: '' };
  }
}
