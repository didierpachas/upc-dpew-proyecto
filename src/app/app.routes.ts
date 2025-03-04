import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { TeamComponent } from './pages/team/team.component';

export const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "aboutus", component: AboutusComponent },
    { path: "contactus", component: ContactusComponent },
    { path: "team", component: TeamComponent }
];
