import { Component, OnInit,Input,ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('drawer') drawer:any;
  constructor() { }
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  ngOnInit(): void {
  }

  toggle(){
    console.log(this.drawer);
    this.drawer.toggle()
  }

  }
