import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavigationComponent,
    BreadcrumbComponent
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

