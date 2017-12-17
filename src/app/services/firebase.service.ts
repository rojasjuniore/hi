import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router'

@Injectable()
export class FirebaseService {

  constructor(private _http: Http) { }

}
