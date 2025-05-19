import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-master',
  imports: [CommonModule,FormsModule],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css'
})
export class MasterComponent {
departmentList = [
    // Sample data, can be empty initially
    { departmentId: 1, name: 'HR' },
    { departmentId: 2, name: 'IT' }
  ];
  department = { departmentId: 0, name: '' };
  selectedDepartment: any = null;

  // Designation properties
  designationList: any[] = [];
  designation = { designationId: 0, departmentId: 0, name: '' };

  // Select a department from the list
  selectDepartment(dept: any) {
    this.selectedDepartment = dept;
    this.loadDesignationsForDepartment(dept.departmentId);
    this.resetDesignationForm();
  }

  // ----- Department CRUD -----

  openAddDepartment() {
    this.department = { departmentId: 0, name: '' };
  }

  editDepartment(dept: any) {
    this.department = { ...dept };
  }

  saveDepartment() {
    if (this.department.departmentId === 0) {
      // Add new
      const newId = this.departmentList.length + 1;
      this.departmentList.push({ ...this.department, departmentId: newId });
    } else {
      // Update existing
      const index = this.departmentList.findIndex(d => d.departmentId === this.department.departmentId);
      if (index !== -1) {
        this.departmentList[index] = { ...this.department };
      }
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
      const newId = this.designationList.length + 1;
      this.designationList.push({ ...this.designation, designationId: newId });
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
