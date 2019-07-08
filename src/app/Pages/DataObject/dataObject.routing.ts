import { Routes } from '@angular/router';
import { DataObjectComponent } from './DataObject/dataObject.component';

export const DataObjectRoutes: Routes = [
    {
        path: '',
        component: DataObjectComponent
    },
    {
        path: 'real-data',
        component: DataObjectComponent
    }
]
