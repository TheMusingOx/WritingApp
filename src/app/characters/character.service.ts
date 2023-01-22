import { Injectable } from '@angular/core';
import * as Parse from 'parse';
import ParseData from '../data/server_data.json';
import { Character } from '../data/character';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  CharacterList: Character[] = [];
  characterList$: Observable<Character[]> = of(this.CharacterList)

  constructor() { 
    Parse.initialize(ParseData.appID, ParseData.jsKey); 
    (Parse as any).serverURL = ParseData.parseURL;
    this.loadCharacters();
  }

  async loadCharacters() {
    // const character: Parse.Object = Parse.Object.extend('character');
    const query: Parse.Query = new Parse.Query('character');
    try {
      const results: Parse.Object[] = await query.find();
      for (const object of results) {
        const charTemp: Character = {
          name: object.get('name'),
          age: object.get('age'),
          description: object.get('description'),
          id: object.get('objectID'),
          nickName: object.get('nickName'),
        }
        this.CharacterList.push(charTemp)
      }
      console.log("Characters Loaded" + this.CharacterList)
    } catch (error: any) {
      console.error('Error while fetching character', error);
    }
  }

  refreshCharList() {
    this.CharacterList = []; 
    this.loadCharacters();
    alert("Ensure you save your data before refreshing.")
    console.log("refreshing Characters")
  }
}

