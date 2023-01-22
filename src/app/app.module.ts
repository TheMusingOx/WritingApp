import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManuscriptModule } from './manuscript/manuscript.module';
import { RichTextEditorComponent } from './rich-text-editor/rich-text-editor.component';
import { CharactersModule } from './characters/characters.module';
import { TableStatesModule } from './table-states/table-states.module';
import { WorldbuildingModule } from './worldbuilding/worldbuilding.module';
import { QuillModule } from 'ngx-quill';
import { MAINUIModule } from './interface/main-ui.module';

@NgModule({
  declarations: [
    AppComponent,
    RichTextEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ManuscriptModule,
    CharactersModule,
    TableStatesModule,
    WorldbuildingModule,
    MAINUIModule,
    QuillModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
