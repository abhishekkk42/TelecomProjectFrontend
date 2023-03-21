import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {

user:User[];

  isLogin:Boolean=false;
  constructor(private router:Router){}

  ngOnInit(): void {
    if(localStorage.getItem("token")){
      this.isLogin=true;
    }
  }


  onLogout(){
    localStorage.removeItem("Token");
    this.router.navigateByUrl("/login");
    this.isLogin=false;   
  }

}
