import { Routes, RouterModule } from '@angular/router';

//Route for content layout without sidebar, navbar and footer for pages like Login, Registration etc...

export const USER_ROUTES: Routes = [
     {
        path: 'pages',
        loadChildren: () => import('../../user/user-routing.module').then(m => m.UserRoutingModule)
    }
];
