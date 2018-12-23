import { Component, OnInit } from '@angular/core';
//imports for httpservice routes and Location
import { HttpgotService } from '../httpgot.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { SpinnerVisibilityService } from 'ng-http-loader';
import { Spinkit } from 'ng-http-loader';

@Component({
  selector: 'app-view-house',
  templateUrl: './view-house.component.html',
  styleUrls: ['./view-house.component.css']
})
export class ViewHouseComponent implements OnInit {
  public spinkit = Spinkit;
  public currentHouse;
  constructor(private spinner: SpinnerVisibilityService, private toastr: ToastrService, public location: Location, private _route: ActivatedRoute, private router: Router, private httpgotService: HttpgotService) {
    this.spinner.show();
  }

  ngOnInit() {
    this.spinner.show();
    //collect houseId from routes
    let houseId = this._route.snapshot.paramMap.get('houseId');
    //console.log(houseId)
    this.httpgotService.getCurrentHouse(houseId).subscribe(
      data => {
        this.currentHouse = data;
        //console.log(this.currentHouse);
        this.spinner.hide();
      },
      error => {
        console.log("error in  currentHouse");
        console.log(error.errorMessage);
        this.toastr.error('Some error Occured');
      }
    );
  }
  //method to get Id out of url
  public getId(url): string {
    let position = url.lastIndexOf('/');
    let id = url.substr(position + 1);
    return id;
  }; //end of getId()
  //method for back facility
  public goToPreviousPage(): any {
    this.location.back();
  }//end of gobackToPreviousPage
}//end of class
