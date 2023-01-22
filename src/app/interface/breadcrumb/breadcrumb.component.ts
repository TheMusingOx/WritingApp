import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/data/character';
import { CharacterService } from '../../characters/character.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})

export class BreadcrumbComponent implements OnInit {

  public activeChar: any = "";

  project: any = {
    name: "Chronicles of the Endri",
  }

  public charList$!: Observable<Character[]>;

  constructor(private characterService: CharacterService) {
    this.charList$ = characterService.characterList$;
   }

  ngOnInit(): void {

  }

  setActiveChar(charID: string) { this.activeChar = charID }
}

