import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { OrderModule } from 'ngx-order-pipe';
import { FilterPipeModule } from 'ngx-filter-pipe';
//import for routing
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewAllComponent } from './view-all/view-all.component';
import { AboutComponent } from './about/about.component';
import { ViewHouseComponent } from './view-house/view-house.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { ViewCharacterComponent } from './view-character/view-character.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpgotService } from './httpgot.service';
import { FormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    ViewAllComponent,
    AboutComponent,
    ViewHouseComponent,
    ViewBookComponent,
    ViewCharacterComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OrderModule,
    FormsModule,
    FilterPipeModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    NgHttpLoaderModule.forRoot(),
    RouterModule.forRoot([
      //declaring possible routes for the application
      { path: 'all', component: ViewAllComponent },
      { path: '', redirectTo: 'all', pathMatch: 'full' },
      { path: 'about', component: AboutComponent },
      { path: 'book/:bookId', component: ViewBookComponent },
      { path: 'house/:houseId', component: ViewHouseComponent },
      { path: 'character/:characterId', component: ViewCharacterComponent },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  providers: [HttpgotService],   //providing http service to app
  bootstrap: [AppComponent]
})
export class AppModule { }
