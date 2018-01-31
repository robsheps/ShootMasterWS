import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import {Event} from "./event.model";
import {EVENT} from "../mock-event";

@Injectable()
export class EventService {

  constructor() { }

  getEvents(): Observable<Event[]> {
    return of(EVENT);
  }
}






