import { Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ConfiguracionComponent } from './paginas/configuracion/configuracion.component';
import { InformacionComponent } from './paginas/informacion/informacion.component';

export const routes: Routes = [
    {path: '', component: InicioComponent},
    {path: 'config', component: ConfiguracionComponent},
    {path: 'info*:id', component: InformacionComponent},
    {path: '', redirectTo: '', pathMatch:'full'}
];
