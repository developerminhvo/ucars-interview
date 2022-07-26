import { Routes } from "@angular/router";
import { CarListComponent } from "../car-list/car-list.component";

export const routes: Routes = [
    {
        path: '',
        // component: CarListComponent
        loadComponent: () =>
        import('../car-list/car-list.component').then((m) => m.CarListComponent),
    }
];