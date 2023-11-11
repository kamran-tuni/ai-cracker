import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, filter, firstValueFrom, Observable, of, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) {
    //
  }

  getNews(): Promise<any> {
    return new Promise(resolve => {
      // TODO
      const url = '';
      resolve(firstValueFrom(this.http.get(url)));
    });
  }

  getMockNews(): Promise<any> {
    return new Promise(resolve => {
      return setTimeout(() => {
        resolve({
          news: [
            {
              source: 'Helsingin Sanomat',
              header: "Foreign-language speakers to account for almost 25% of Helsinki's population",
              summary: "The share of foreign-language speakers of the population of Helsinki stood at 13.5 per cent at the beginning of this year, with Russian, Estonian, Somali and English speakers being the largest groups foreign-language speakers."
            },
            {
              source: 'Helsingin Sanomat',
              header: "Foreign-language speakers to account for almost 25% of Helsinki's population",
              summary: "Arabic, in particular, is projected to become a greater feature of the urban landscape. Helsinki will according to the forecast be home to as many as 32,000 people who speak Middle Eastern or Northern African languages – such as Arabic or Kurdish – as their mother tongue by 2030, representing a three-fold increase from the current situation."
            }
          ]
        });
      }, 3000); // delay for mocking
    });
  }

}
