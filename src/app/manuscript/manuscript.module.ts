import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';
import { ManuscriptHomeComponent } from './manuscript-home/manuscript-home.component';

@NgModule({
  declarations: [
    OverviewComponent,
    ManuscriptHomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    
  ]
})

export class ManuscriptModule { }

