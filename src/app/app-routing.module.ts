import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AngularRoutes } from "./angular/angular-routing.module";
import { ComponentRoutes } from "./components/sobre-component/sobreComponents-routing.module";
import { BindingRoutes } from "./data-binding/sobreBinding-routing.module";
import { DiretivasRoutes } from "./diretivas/diretivas-routing.module";
import { ServicesRoutes } from "./services/services-routing.module";

export const routes: Routes = [
    {
        path:'',
        redirectTo:'/home',
        pathMatch: 'full'
    },
    ...AngularRoutes,
    ...ComponentRoutes,
    ...BindingRoutes,
    ...DiretivasRoutes,
    ...ServicesRoutes
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class appRoutingModule{}