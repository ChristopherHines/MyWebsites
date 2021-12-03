import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BillTrackerComponent } from './bill-tracker/bill-tracker.component';
import { PiholeComponent } from './pihole/pihole.component';
import { PivpnComponent } from './pivpn/pivpn.component';
import { FamilyTreeComponent } from './family-tree/family-tree.component';

const routes: Routes = [ { path: '', redirectTo: 'home', pathMatch: 'full' },
                         { path: 'home', component: HomeComponent},
                         { path: 'bill-tracker', component: BillTrackerComponent },
                         { path: 'pihole', component: PiholeComponent },
                         { path: 'pivpn', component: PivpnComponent },
                         { path: 'family-tree', component: FamilyTreeComponent }
                       ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }