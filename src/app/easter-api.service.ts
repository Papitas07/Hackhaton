import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { formatDate } from './helpers/date';

class stockApi {


}

@Injectable({
  providedIn: 'root'
})
export class EasterApiService {

  constructor(private http: HttpClient) { }

  getMilk(timestamp: Date, interval: number): Observable<stockApi> {
    // Code here
    let myTimestamp = formatDate(timestamp)
    return this.http.get(`/api/stocks/milks?min=${myTimestamp}&interval=${interval}`)
  }
  getChocolate(timestamp: Date, interval: number): Observable<stockApi> {
    // Code here
    let myTimestamp = formatDate(timestamp)
    return this.http.get(`/api/stocks/chocolates?min=${myTimestamp}&interval=${interval}`)
  }
  getEggs(timestamp: Date, interval: number): Observable<stockApi> {
    // Code here
    let myTimestamp = formatDate(timestamp)
    return this.http.get(`/api/stocks/eggs?min=${myTimestamp}&interval=${interval}`)
  }
}
