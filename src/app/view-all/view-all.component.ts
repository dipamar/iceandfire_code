import { Component, OnInit } from '@angular/core';
//impoting http service
import { HttpgotService } from '../httpgot.service';
import { SpinnerVisibilityService } from 'ng-http-loader';
import { Spinkit } from 'ng-http-loader';
@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {
  public spinkit = Spinkit;
  public allBooks;
  public allHouses: any;
  public allCharacters: any;
  public finalData: any = ``;
  public tempData = [];
  userFilter: any = { name: '' };      //data memer for filter use
  constructor(private spinner: SpinnerVisibilityService, public httpgotService: HttpgotService) {
    // console.log(`viewAllComponent constructor`);
    this.spinner.show();
  }
  ngOnInit() {
    this.spinner.show();
    //get all the books
    this.httpgotService.getAllBooks().subscribe(
      data => {
        setTimeout(() => {
          console.log(`get all book success`);
          this.allBooks = data;
          this.tempData.push(this.allBooks);
          this.finalData = [].concat(...this.tempData);
          // console.log(this.allBooks);
          // console.log(`final data ${this.tempData.length}`);
          this.spinner.hide();

        }, 1500)
      },
      error => {
        console.log(`get books blog error`);
        console.log(error.errorMessage);
      }
    );//end of getAllBooks
    //get all house 
    this.httpgotService.getAllHouses().subscribe(
      data => {
        setTimeout(() => {
          console.log(`get all house success`);
          this.allHouses = data;
          this.tempData.push(this.allHouses);
          this.finalData = [].concat(...this.tempData);
          // console.log(`final data ${this.tempData.length}`);
          // console.log(this.allHouses);
          this.spinner.hide();
        }, 1500)
      },
      error => {
        console.log(`get all house error`);
        console.log(error.errorMessage);
      }
    );//end of getAllHouses
    //get all characters
    this.httpgotService.getAllCharacters().subscribe(
      data => {
        setTimeout(() => {
          console.log(`get  getAllCharacters success`);
          this.allCharacters = data;
          this.tempData.push(this.allCharacters);
          this.finalData = [].concat(...this.tempData);
          //console.log(Array.isArray(this.finalData));
          //console.log(this.allCharacters);
          // console.log(`final data ${this.tempData.length}`);
          this.spinner.hide();
        }, 1500)
      },
      error => {
        console.log(`get  getAllCharacters error`);
        console.log(error.errorMessage);
      }
    );//end of getAllCharacters
  }//end of onInit()
  public getId = (url: string): string => {
    let position = url.lastIndexOf('/');
    let urlId = url.substr(position + 1);
    return urlId;
  }; //end of getId
}
