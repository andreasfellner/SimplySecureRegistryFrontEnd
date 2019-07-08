import { Injectable, EventEmitter } from '@angular/core';
import { SourceKey } from '../models';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SourceKeyService {

  protected sourceKeys: SourceKey[];
  public eventDataUpdated: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  public setData(data: SourceKey[]) {
    
    this.sourceKeys = data;
    this.eventDataUpdated.next(true);
  }

  public getData() {
    return this.sourceKeys;
  }
  
}
