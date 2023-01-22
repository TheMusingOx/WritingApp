import { Component, OnInit } from '@angular/core';
import Parse from 'parse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'writing-software';

  ngOnInit() {
    Parse.initialize("hvVcxAakjPcArreqDkqJpCSHe3vMF0TmP1RY0WfM", "mZFoSawwwnHKtkid4eeZD0Lb5MTS17Fc5ls47fSa");
    Parse.serverURL = 'https://parseapi.back4app.com/';

  }
}
