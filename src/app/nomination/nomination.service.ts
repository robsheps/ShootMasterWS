import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import {Nomination} from "./nomination.model";
import {NOMINATION} from "../mock-nomination";

@Injectable()
export class NominationService {

  constructor() { }

  getNominations(): Observable<Nomination[]> {
    return of(NOMINATION);
  }
}
