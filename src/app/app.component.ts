import { Component } from '@angular/core';
import { User } from './user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Course Registration Form';
  userModel=new User('Arun','K P','arunkp.it20@bitsathy.ac.in',"male","Angular123","Angular","2");
}
