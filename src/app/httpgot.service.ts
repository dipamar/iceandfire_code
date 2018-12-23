import { Injectable } from '@angular/core';
//imports for http call
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpgotService {
  public currentBook;
  public currentHouse;
  public currentCharacter;
  public baseUrl = `https://www.anapioficeandfire.com/api/`;    //base url of the api

  constructor(public _http: HttpClient) {
    console.log(`service called`);
  }
  //method for exception handling
  private handleError(err: HttpErrorResponse) {
    console.log(`Handled error here`);
    console.log(err.message);
    return Observable.throw(err.message);
  }
  //method to get all the books from api
  public getAllBooks(): any {
    console.log(`allBooks service`);
    let allBooks = this._http.get(`${this.baseUrl}books?page=1&pageSize=50`);
    console.log(`${this.baseUrl}books?page=1&pageSize=50`)
    console.log(allBooks);
    return allBooks;
  }//end of getAllBooks()
  //method to get all the house list from api
  public getAllHouses(): any {
    let allHouses = this._http.get(`${this.baseUrl}houses?page=1&pageSize=50`);
    console.log(allHouses);
    return allHouses;
  }//end of getAllHouses()
  //method to get all the characters from api
  public getAllCharacters(): any {
    let allCharacters = this._http.get(`${this.baseUrl}characters?page=2&pageSize=50`);
    console.log(allCharacters);
    return allCharacters;
  }//end of getAllCharacters
  //method to get current book from api
  public getCurrentBook(bookId: string): any {
    let currentBook = this._http.get(`${this.baseUrl}books/${bookId}`);
    console.log(currentBook);
    return currentBook;
  }//end of getCurrentBook
  //method to get current house from api
  public getCurrentHouse(houseId): any {
    let currentHouse = this._http.get(`${this.baseUrl}houses/${houseId}`);
    console.log(currentHouse);
    return currentHouse;
  }///end of getCurrentHouse
  //method to get current character from api
  public getCurrentCharacter(characterId): any {
    let currentCharacter = this._http.get(`${this.baseUrl}characters/${characterId}`);
    console.log(currentCharacter);
    return currentCharacter;
  }//end of getCurrentHouse
}
