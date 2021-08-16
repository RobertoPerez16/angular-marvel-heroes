import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private apiUrl = 'https://gateway.marvel.com:443/v1/public/'
  private apiKey = '17ebbfb30c9416d05ba83562d019f8bc'
  private hash = '452dab1b5d0d05086a03fe1e231b46ee'

  constructor(private http : HttpClient) { }

  getHeroes (url: string, offset?: number) : Observable<any> {
      return this.http.get(`${ this.apiUrl }${ url }?ts=1&apikey=${ this.apiKey }&hash=${ this.hash }&offset=${ offset }`)
  }

  getHeroById (url: string, id: number) : Observable<any> {
      return this.http.get(`${ this.apiUrl }${ url }/${ id }?ts=1&apikey=${ this.apiKey }&hash=${ this.hash }`)
  }

  getComicByTitle (url: string, title: string) : Observable<any> {
      return this.http.get(`${ this.apiUrl }${ url }?ts=1&apikey=${ this.apiKey }&hash=${ this.hash }&title=${ title }`)
  }
}
