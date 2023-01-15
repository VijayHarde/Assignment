import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  myform = new FormGroup({
    name: new FormControl('', Validators.required),
    domain: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    dob:new FormControl('', Validators.required),
    mobileNumber:new FormControl('+91', Validators.required),
    location: new FormControl('',Validators.required)
  });

 
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }



}
