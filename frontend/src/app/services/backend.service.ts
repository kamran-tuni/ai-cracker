import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, filter, firstValueFrom, Observable, of, Subject, tap } from 'rxjs';

export type Conversation = {
  name: string
  message: string
  loading: boolean
}

export type News = {
  source: string
  header: string
  summary: string
}

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private _conversation = new BehaviorSubject<Conversation[]>([]);
  public readonly conversation$ = this._conversation.asObservable();
  private _news = new BehaviorSubject<News[]>([]);
  public readonly news$ = this._news.asObservable();

  constructor(private http: HttpClient) {
    //
  }

  sendMessage(message: string): Promise<void> {
    const converstion = this._conversation.getValue().map(c => {
      if (c.loading) {
        c.message = "-CANCELED-";
        c.loading = false;
      }
      return c;
    });
    converstion.push({
      name: 'You',
      message: message,
      loading: false
    });
    converstion.push({
      name: 'ChatOTK',
      message: "",
      loading: true
    });
    this._conversation.next(converstion);
    return this.getResponse(message).then(response => {
      converstion.pop();
      converstion.push({
        name: 'ChatOTK',
        message: response.message,
        loading: false
      });
    },
    () => {
      // Error
      converstion.pop();
      converstion.push({
        name: 'ChatOTK',
        message: '-ERROR-',
        loading: false
      });
    })
    .finally(() => this._conversation.next(converstion));
  }

  getNews(): Promise<any> {
    return new Promise(resolve => {
      // TODO
      const url = '';
      resolve(firstValueFrom(this.http.get(url)));
    });
  }

  getResponse(message: string): Promise<any> {
    console.log('message', message);
    return new Promise(resolve => {
      return setTimeout(() => {
        // TODO
        const url = '';
        // message
        // resolve(firstValueFrom(this.http.get(url)));
        resolve({message: 'Dunno, ask something else!'});
      }, 3000);
    });
  }

  setMockNews(): Promise<void> {
    return new Promise(resolve => {
      return setTimeout(() => {
        this._news.next([
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
        ]);
        resolve();
      }, 3000); // delay for mocking
    });
  }

}
