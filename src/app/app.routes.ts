import { Routes, RouterModule } from '@angular/router';
import {
    ContactComponent,
    HomepageComponent,
    ProjectsComponent
} from './components/index.pagina';

const APP_ROUTES: Routes = [
    { path: 'homepage', component: HomepageComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'homepage' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
