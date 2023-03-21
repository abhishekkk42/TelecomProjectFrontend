import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { Service } from '../service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user:User = new User();
  UserLoginService: any;

  constructor(private UserService:Service, private router:Router){}
  userloginservice: any;
 
  ngOnInit(): void {
    
  }
    

  // doSignup(user:User){
  //   const itemTouser = () => {
  //     if(this.user === undefined) {return}
             
      // The rest of the code
    
//     let res = this.userloginservice.signup(User);
//     res.subscribe((data: string)=>{
//       if(data==="User not authenticated"){
//         alert(data);
//       }
//       else if(data==="phone no or password does not match."){
//         alert(data);
//       }
//       else if(data==="there is an error"){
//         alert(data);
//       }
//       else{
//         localStorage.setItem("token",data);
//         console.log(data);
//         this.router.navigateByUrl('/home');
//       }
    
//     });

//   }  
// }

register(){
  this.UserService.registerUser(this.user).subscribe(data=>{
    alert("Registered");
    this.goToLogin();
  });
}
goToLogin(){
  this.router.navigate(['/login']);
}
}