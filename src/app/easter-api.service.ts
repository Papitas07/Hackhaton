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

export class eggsProperty {

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

  getMilk(timestamp: Date, interval: number): Observable<any> {
    // Code here
    let myTimestamp = timestamp.getTime()
    return this.http.get(`http://easteregg.wildcodeschool.fr/api/stocks/milks?min=${myTimestamp}&interval=${interval}`)
  }
  getChocolate(timestamp: Date, interval: number): Observable<any> {
    // Code here
    let myTimestamp = timestamp.getTime()
  
    return this.http.get(`http://easteregg.wildcodeschool.fr/api/stocks/chocolates?min=${myTimestamp}&interval=${interval}`)
  }
  getEggs(timestamp: Date, interval: number): Observable<any> {
    // Code here
    let myTimestamp = timestamp.getTime()
    return this.http.get(`http://easteregg.wildcodeschool.fr/api/stocks/eggs?min=${myTimestamp}&interval=${interval}`)
  }

getEggOne(): Observable<any>{

  return this.http.get<any>(`http://easteregg.wildcodeschool.fr/api/eggs/5cac51240d488f0da6151bd5`)
}
getEgg2(): Observable<any>{

  return this.http.get<any>(`http://easteregg.wildcodeschool.fr/api/eggs/5cac51240d488f0da6151bd7`)
}
getEgg3(): Observable<any>{

  return this.http.get<any>(`http://easteregg.wildcodeschool.fr/api/eggs/5cac51240d488f0da6151be2`)
}
getEgg4(): Observable<any>{

  return this.http.get<any>(`http://easteregg.wildcodeschool.fr/api/eggs/5cac51240d488f0da6151be4`)
}
getEgg5(): Observable<any>{

  return this.http.get<any>(`http://easteregg.wildcodeschool.fr/api/eggs/5cac51240d488f0da6151be7`)
}
getEgg6(): Observable<any>{

  return this.http.get<any>(`http://easteregg.wildcodeschool.fr/api/eggs/5cac51240d488f0da6151bed`)
}
getEgg7(): Observable<any>{

  return this.http.get<any>(`http://easteregg.wildcodeschool.fr/api/eggs/5cac51240d488f0da6151bf9`)
}
getEgg8(): Observable<any>{

  return this.http.get<any>(`http://easteregg.wildcodeschool.fr/api/eggs/5cac51240d488f0da6151bfa`)
}
getLegendaryEgg(): Observable<any>{

  return this.http.get<any>(`http://easteregg.wildcodeschool.fr/api/eggs/5cac51240d488f0da6151bd6`)
}
  
}
