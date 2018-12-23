import { Component, OnInit } from '@angular/core';
//imports for httpservice routers and Location
import { HttpgotService } from '../httpgot.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { SpinnerVisibilityService } from 'ng-http-loader';
import { Spinkit } from 'ng-http-loader';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {
  public spinkit = Spinkit;
  public currentBook;
  constructor(private spinner: SpinnerVisibilityService, private toastr: ToastrService, public location: Location, private _route: ActivatedRoute, private router: Router, private httpgotService: HttpgotService) {
    this.spinner.show();
  }

  ngOnInit() {
    this.spinner.show();
    //collect the bookId from routes
    let bookId = this._route.snapshot.paramMap.get('bookId');
    console.log(bookId)
    this.httpgotService.getCurrentBook(bookId).subscribe(
      data => {
        this.currentBook = data;
       // console.log(this.currentBook);
        this.spinner.hide();
      },
      error => {
        console.log("error in current book");
        console.log(error.errorMessage);
        this.toastr.error('Some error Occured');
      }
    );
  }
  //method to return bookid out of the url
  public getId = (url): string => {
    let position = url.lastIndexOf('/');
    let bookId = url.substr(position + 1);
    return bookId;
  }; //end of getid()
  //method for go back facility
  public goToPreviousPage(): any {
    this.location.back();
  }//end of goToPreviousPage()
}
