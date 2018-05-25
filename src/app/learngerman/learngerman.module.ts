import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LearngermanComponent} from './learngerman.component';
import {RouterModule, Routes} from '@angular/router';
import { TranslationsManagementComponent } from './translations-management/translations-management.component';
import { ItemDetailComponent } from './translations-management/items/item-detail/item-detail.component';
import { ItemsListComponent } from './translations-management/items/items-list/items-list.component';
import { ItemFormComponent } from './translations-management/items/item-form/item-form.component';


const routes: Routes = [
  {path: '', component: LearngermanComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    LearngermanComponent,
    TranslationsManagementComponent,
    ItemDetailComponent,
    ItemsListComponent,
    ItemFormComponent
  ]
})
export class LearngermanModule { }
