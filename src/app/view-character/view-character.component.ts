import { Component, OnInit } from '@angular/core';
//imports for httpserice routes and Location
import { HttpgotService } from '../httpgot.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { SpinnerVisibilityService } from 'ng-http-loader';
import { Spinkit } from 'ng-http-loader';

@Component({
  selector: 'app-view-character',
  templateUrl: './view-character.component.html',
  styleUrls: ['./view-character.component.css']
})
export class ViewCharacterComponent implements OnInit {
  public spinkit = Spinkit;
  public currentCharacter;
  constructor(private spinner: SpinnerVisibilityService, private toastr: ToastrService, public location: Location, private _route: ActivatedRoute, private router: Router, private httpgotService: HttpgotService) {
    this.spinner.show();
  }

  ngOnInit() {
    this.spinner.show();
    //collect characterId from routes
    let characterId = this._route.snapshot.paramMap.get('characterId');
    console.log(characterId)
    this.httpgotService.getCurrentCharacter(characterId).subscribe(
      data => { //if data is returned
        this.currentCharacter = data;
       // console.log(this.currentCharacter);
        this.spinner.hide();
      },
      error => {
        console.log("error in currentCharacter");
        console.log(error.errorMessage);
        this.toastr.error('Some error Occured');
      }
    );
  }//end of ngOnInit()
  //method to return id out of url
  public getId(url): string {
    let position = url.lastIndexOf('/');
    let id = url.substr(position + 1);
    return id;
  }; //end of getId()
  //method to provide Back facility
  public goToPreviousPage(): any {
    this.location.back();
  }//end of gobackToPreviousPage
}//end of class
