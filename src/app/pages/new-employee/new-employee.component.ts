import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IDepartment, IDesignation } from '../../core/models/master.model';
import { MasterService } from '../../core/services/master.service';
import { AsyncPipe } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ValidationConstant } from '../../core/constant/Constant';

@Component({
  selector: 'app-new-employee',
  imports: [AsyncPipe,ReactiveFormsModule],
  templateUrl: './new-employee.component.html',
  styleUrl: './new-employee.component.css'
})
export class NewEmployeeComponent {

  deptList$: Observable<IDepartment[]> = new Observable<IDepartment[]>

  masterSrc = inject(MasterService);
  employeeForm!: FormGroup;
  designationList: IDesignation[]= [];

  constructor(private fb: FormBuilder) {
    this.initializeForm()
    this.deptList$ =  this.masterSrc.getDepartments();
  }

  initializeForm() {
    this.employeeForm =  new FormGroup({
      employeeId: new FormControl(0,[Validators.required])
    })

    this.employeeForm = this.fb.group({
      employeeId: [0],
      employeeCode: ['', Validators.required],
      verificationDocNumber: [''],
      verificationDocName: [''],
      profileOverview: [''],
      fullName: ['', Validators.required],
      isFresher: [true],
      maritalStatus: [''],
      spouseName: [''],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
      gender: [''],
      dob: [null],
      joiningDate: [null],
      departmentId: ['', Validators.required],
      designationId: ['', Validators.required],
      stateName: [''],
      cityName: [''],
      profilePhotoUrl: [''],
      status: [''],
      createdAt: [new Date()]
    });
    this.employeeForm.controls['departmentId'].valueChanges.subscribe((deptId:number)=>{
      debugger;
      this.getDesignationByDept(deptId)
    })

    this.employeeForm.controls['maritalStatus'].valueChanges.subscribe((status:string)=>{
      debugger;
      const spouceControl  = this.employeeForm.get("spouseName") as FormControl;
      if(status == "Married") {
        spouceControl?.addValidators(Validators.required);
      } else {
        spouceControl?.removeValidators(Validators.required);
      }
      this.updateFormValidity()
    })
    this.employeeForm.controls['verificationDocName'].valueChanges.subscribe((docType:string)=>{
      debugger;
      if(docType =='Aadhar Card') {
        this.employeeForm.get("verificationDocNumber")?.addValidators(Validators.pattern(ValidationConstant.REG_EX.AADHAR_CARD))
      } else {
        this.employeeForm.get("verificationDocNumber")?.addValidators(Validators.pattern(ValidationConstant.REG_EX.PAN_CARD))
      }
     this.updateFormValidity()
    })

  }

  updateFormValidity() {
    this.employeeForm.updateValueAndValidity();
  }

  get getMaritalStatus() {
    return this.employeeForm.controls['maritalStatus'].value;
  }

  get getStatus() {
    return this.employeeForm.get('maritalStatus')?.value;
  }

  getDesignationByDept(id: number) {
    this.masterSrc.getDesignationByDeptId(id).subscribe((Res:IDesignation[])=>{
      this.designationList =  Res;
    })
  }

}
