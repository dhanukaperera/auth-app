import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  constructor(public afAuth: AuthService,private router:Router) { }

  ngOnInit() {
  }
  signOut(){
this.afAuth.singOut();
  }
}
