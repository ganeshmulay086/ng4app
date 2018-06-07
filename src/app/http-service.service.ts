import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor( private _http:Http ) { }
  getData(){
    return this._http.get('http://localhost/api/api.php');
  }

}
