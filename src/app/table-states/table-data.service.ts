import { Injectable } from '@angular/core';
import Parse from 'parse'
import { storyEvent, cellStatus } from '../data/char-tables';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

// Add functionality to pull events based on story or version of story
// Eventually add ability to filter by user.

export class TableDataService {

  storyID: string = 'temp'

  events: storyEvent[] = []

  events$: Observable<storyEvent[]> = of(this.events)

  constructor() {
    this.syncEvents()
}

  saveAll() {
    // this.saveCells()
    // this.saveQuests()

  }

  /////////////////////////////////////////////////////////////////////////////
  ////////////////////////////// Events Section ///////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  public updateAllEvents() {
    // Step 4: do this for each version of the story
    // Step 5: add undo and redo functionality

    // create new events
    this.events.forEach(e =>
      e.status === cellStatus.new ? this.createNewEvent(e): null)

    // update existing events
    this.events.forEach(e =>
      e.status === cellStatus.edited ? this.updateEvent(e) : null)

    // delete "deleted" events
    this.events.forEach(e =>
      e.status === cellStatus.deleted ? this.deleteEvent(e): null)

    this.syncEvents()
  }

  private async syncEvents() {
    // const Events: Parse.Object = Parse.Object.extend('Events');
    const query: Parse.Query = new Parse.Query('Events');
    // You can also query by using a parameter of an object
    // query.equalTo('objectId', 'xKue915KBG');
    try {
      const results: Parse.Object[] = await query.find();
      for (const object of results) {
        // Access the Parse Object attributes using the .GET method
        const Temp: storyEvent = {
        ID: object.id,
        storyID: this.storyID,
        name: object.get('name'),
        desc: object.get('desc'),
        beingEdited: false,
        status: cellStatus.saved,
        storyTime: object.get('storyTime'),
        storyOrder: object.get('storyOrder'),
        presentOrder: object.get('presentOrder')
        }
        console.log(object)
        this.events.push(Temp)
      }
    } catch (error: any) {
      console.error('Error while fetching Events', error);
    }
    this.sortEvents
    console.log(this.events)
  }

  getEvent(e: number): storyEvent { return this.events[e] }

  private async createNewEvent(e: storyEvent) {
    const myNewObject: Parse.Object = new Parse.Object('Events');
    myNewObject.set('name', e.name);
    myNewObject.set('desc', e.desc);
    myNewObject.set('story', this.storyID)
    myNewObject.set('storyTime', e.storyTime);
    myNewObject.set('storyOrder',  e.storyOrder);
    myNewObject.set('presentOrder', e.presentOrder);
    try {
      const result: Parse.Object = await myNewObject.save();
      e.ID = result.get('objectID')
      // Access the Parse Object attributes using the .GET method
      console.log('Events created', result);
      e.status = cellStatus.saved
      this.events.push(e)
      this.sortEvents()
    } catch (error: any) {
      console.error('Error while creating Events: ', error);
    }
  }

  private async updateEvent(e: storyEvent) {
    const query: Parse.Query = new Parse.Query('Events');
    try {
      // here you put the objectId that you want to update
      const object: Parse.Object = await query.get(e.ID);
      object.set('name', e.name);
      object.set('desc', e.desc);
      object.set('story', e.storyID)
      object.set('storyTime', e.storyTime);
      object.set('storyOrder',  e.storyOrder);
      object.set('presentOrder', e.presentOrder);
      try {
        const response: Parse.Object = await object.save();
        // You can use the "get" method to get the value of an attribute
        e.status = cellStatus.saved
        console.log('Events updated', response);
      } catch (error: any) {
        console.error('Error while updating Events', error);
        }
    } catch (error: any) {
        console.error('Error while retrieving object Events', error);
    }
  }

  sortEvents(type: string = 'StoryTime') {
    switch (type) {
      case 'PresentaionOrder':
        this.events.sort((a,b) => {return a.presentOrder-b.presentOrder})
        break
      case 'StoryTime':
      default:
        this.events.sort((a,b) => {return a.storyOrder-b.storyOrder})
        break
    }
  }

  createTempEvent(i: number) {
    let tempE: storyEvent = {
      ID: '',
      storyID: 'temp',
      name: 'New Event',
      desc: '',
      beingEdited: true,
      status: cellStatus.new,
      storyTime: '',
      storyOrder: 0,
      presentOrder: 0,
    }

    if(i === 0 ){
      tempE.storyOrder = Math.round(this.events[i].storyOrder/2)
      this.events.push(tempE)
      tempE.storyOrder < 2 ? this.events.forEach((item, index) => {item.storyOrder = 2000 + index * 2000}) : null;
    }else if(i == this.events.length){
      tempE.storyOrder = this.events[i-1].storyOrder + 1000
      this.events.push(tempE)
    }else if (i > 0){
      const e = Math.round((this.events[i-1].storyOrder + this.events[i].storyOrder)/2)
      tempE.storyOrder = e
      this.events.push(tempE)
      // redistribute storyOrder if the interval becomes too small.
      if(e < 2) {
        this.events.forEach((item, index) => {item.storyOrder = 2000 + index * 2000})
      }
    }
    this.sortEvents()
  }

  deleteEvent(e: storyEvent){
    console.log('pretend I deleted: ' + e.ID)
  }

}
