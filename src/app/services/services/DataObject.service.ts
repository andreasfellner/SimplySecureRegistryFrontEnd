import { Injectable, EventEmitter } from '@angular/core';
import { DataObject } from '../models';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataObjectService {

  protected dataObjects : DataObject[];

  public eventDataUpdated: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  public setData(data : DataObject[])
  {
    this.dataObjects = data;
    this.eventDataUpdated.next(true);
  }

 

  public getData()
  {
    return this.dataObjects;
  }
}
