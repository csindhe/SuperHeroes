import { AdminDashboardComponent } from './admin-dashboard.component';
import { ManageHeroesComponent } from './manage-heroes.component';
import { ManageCrisesComponent } from './manage-crises.component';
import { AdminComponent } from './admin.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from '../auth-guard.service';

const adminRoutes: Routes = [
    { path: '', component: AdminComponent, canActivate: [AuthGuard], children: [
            {
                path: '',
                canActivateChild: [AuthGuard],
                children: [
                    {
                        path: 'crises', component: ManageCrisesComponent
                    },
                    {
                        path: 'heroes', component: ManageHeroesComponent
                    },
                    {
                        path: '', component: AdminDashboardComponent
                    }
                ]
            }
        ] 
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AdminRoutingModule { }