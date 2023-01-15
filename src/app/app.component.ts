import { Component, OnInit, OnDestroy } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnDestroy {
  title = 'Assignment';
  name:string = "Mary,Jason&Hodge of Attorney"
  domain:string = "www.mjhattorenys.com";
  gender:string = "Male";
  dob:string = "8th June 1979";
  phoneNumber:string = "+8654321234";
  location:string = "12 street,Silicon Valley,Avenue NE,Huntsvile";
  constructor(public dialog: MatDialog)  {

  }
  ngOnInit() {
  }

  openDialog() {
    const dialogRef = this.dialog.open(EditProfileComponent);

    dialogRef.afterClosed().subscribe((result:any) => {
      console.log(`Dialog result: ${JSON.stringify(result)}`);
      this.name = result.name;
      this.domain = result.domain;
      this.gender = result.gender;
      this.dob = result.dob;
      this.phoneNumber = result.mobileNumber;
      this.location = result.location;
    });
  }
  ngOnDestroy() {
  }
}
