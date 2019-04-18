import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


class stockApi {


  date:string
  price:number
  amount:number
  unit:string
  trend:string
  trades:number

}

class eggsProperty {

  id: string
  name: string
  color: string
  country: string
  rarity: string
  image: string
  power: string


}

@Injectable({
  providedIn: 'root'
})
export class EasterApiService {

  constructor(private http: HttpClient) { }

  getMilk(timestamp: Date, interval: number): Observable<stockApi> {
    // Code here
    let myTimestamp = timestamp.getTime()
    return this.http.get<stockApi>(`http://easteregg.wildcodeschool.fr/api/stocks/milks?min=${myTimestamp}&interval=${interval}`)
  }
  getChocolate(timestamp: Date, interval: number): Observable<stockApi> {
    // Code here
    let myTimestamp = timestamp.getTime()
  
    return this.http.get<stockApi>(`http://easteregg.wildcodeschool.fr/api/stocks/chocolates?min=${myTimestamp}&interval=${interval}`)
  }
  getEggs(timestamp: Date, interval: number): Observable<stockApi> {
    // Code here
    let myTimestamp = timestamp.getTime()
    return this.http.get<stockApi>(`http://easteregg.wildcodeschool.fr/api/stocks/eggs?min=${myTimestamp}&interval=${interval}`)
  }

getAllEggs(): Observable<eggsProperty>{

  return this.http.get<eggsProperty>(`http://easteregg.wildcodeschool.fr/api/eggs`)
}
  
}
