import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';
import { authGuard } from './core/guard/auth.guard';
import { NewEmployeeComponent } from './pages/new-employee/new-employee.component';
import { MasterComponent } from './pages/master/master.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { BankDetailsComponent } from './pages/bank-details/bank-details.component';
import { roleCheckGuard } from './core/guard/role-check.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path:'',
        component: LayoutComponent,
        canActivate: [authGuard,roleCheckGuard],
        children:[
            {
                path:'dashboard',
                component:DashboardComponent 
            },
            {
                path:'employee-list',
                component:EmployeeListComponent
            },
            {
                path:'new-employee',
                component: NewEmployeeComponent
            },
            {
                path:'master',
                component: MasterComponent
            } ,
            {
                path:'experience',
                component: ExperienceComponent
            }
            ,
            {
                path:'bank-details',
                component: BankDetailsComponent
            }
        ]
    }
];
