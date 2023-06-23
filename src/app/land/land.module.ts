import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandComponent } from './land.component';
import { HomeComponent } from './home/home.component';
import { ViewlandComponent } from './viewland/viewland.component';
import { AddlandComponent } from './addland/addland.component';
import { EditlandComponent } from './editland/editland.component';
import {MatIconModule} from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '../shared-module/shared.module';
import { Addlandver2Component } from './addlandver2/addlandver2.component';

const routes: Routes = [
    {
        path: '',
        component: LandComponent,
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full',

              },           
            { path: 'home', component: HomeComponent },
            { path: 'addver2', component: Addlandver2Component },
            { path: 'edit/:id', component: Addlandver2Component },
            { path: 'view/:id', component: Addlandver2Component },

        ],
    },
];
@NgModule({
    declarations: [LandComponent, ViewlandComponent, HomeComponent,    AddlandComponent,
        EditlandComponent,
        Addlandver2Component
    ],
    imports: [
        CommonModule,
        MaterialModule,MatIconModule,MatTableModule,
        RouterModule.forChild(routes), ReactiveFormsModule, FormsModule,SharedModule
    ]
})
export class LandModule { }
