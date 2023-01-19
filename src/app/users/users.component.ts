import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user!:{id:string,name:string};
  userDetails!:{id:string,name:string};
  constructor(private router:Router,private route:ActivatedRoute){

  }
ngOnInit(){
  this.route.params.subscribe((data:Params)=>{
    this.user ={
      id:data['id'],
      name:data['name'],
    };
    this.userDetails = {...this.user};
  })
  
}

}
