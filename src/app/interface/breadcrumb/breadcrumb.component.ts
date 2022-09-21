import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/data-structures/character';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})

export class BreadcrumbComponent implements OnInit {



  public activeChar: any = "hello";

  project: any = {
    name: "Chronicles of the Endri",
  }

  public charList: Character[] = [{ 
    "id":'asdf123', 
    "name":'Mica',
    "age": 25,
    description: "",

   }];

  constructor() { }

  ngOnInit(): void {
  }

  setActiveChar(charID: string) { this.activeChar = charID }

}

