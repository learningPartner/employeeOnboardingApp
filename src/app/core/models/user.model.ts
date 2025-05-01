export class LoginModel {
    email: string;
    mobile: string;
    constructor() {
        this.email = '';
        this.mobile = '';
    }
}

export interface IUser {
    employeeId: number
    employeeCode: string
    verificationDocNumber: string
    verificationDocName: string
    profileOverview: string
    fullName: string
    isFresher: boolean
    maritalStatus: string
    spouseName: string
    email: string
    mobile: string
    gender: string
    dob: string
    joiningDate: string
    departmentId: number
    designationId: number
    stateName: string
    cityName: string
    profilePhotoUrl: string
    status: string
    createdAt: string
    
  }