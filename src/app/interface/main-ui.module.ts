import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { FormsModule } from '@angular/forms';
import { MainMenuComponent } from './main-menu/menu.component';

@NgModule({
  declarations: [
    NavigationComponent,
    BreadcrumbComponent,
    MainMenuComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    NavigationComponent
  ]
})

export class MAINUIModule { 
  
}

