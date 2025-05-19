import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core'; 

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  
   dashboardData = {
    totalEmployees: 0,
    totalDepartments: 0,
    totalDesignations: 0,
    last7DaysNewEmployees: 0
  };

  profileStats = {
    totalEmployees: 0,
    averageProfileCompletion: 0
  };

  recentEmployees: any[] = [];

  ngOnInit() {
    // Mock: Replace with API calls
    this.dashboardData = {
      totalEmployees: 19,
      totalDepartments: 7,
      totalDesignations: 30,
      last7DaysNewEmployees: 4
    };

    this.profileStats = {
      totalEmployees: 19,
      averageProfileCompletion: 49.12
    };

    this.recentEmployees = [
      {
        employeeId: 111,
        employeeCode: "abc",
        verificationDocNumber: "abc",
        verificationDocName: "Pan Card",
        profileOverview: "abc",
        fullName: "likki",
        isFresher: true,
        maritalStatus: "abc",
        spouseName: "abc",
        email: "likki@gmail.com",
        mobile: "143413",
        gender: "abc",
        dob: "2025-05-14T00:00:00",
        joiningDate: "2025-05-14T00:00:00",
        departmentId: 8,
        designationId: 10,
        stateName: "abc",
        cityName: "abc",
        profilePhotoUrl: "abc",
        status: "abc",
        createdAt: "2025-05-14T06:26:40.277"
      }
    ];
  }

}
