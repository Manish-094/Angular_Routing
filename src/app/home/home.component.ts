import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
constructor(private router: ActivatedRoute){

}
ngOnInit(){
this.router.params.subscribe((params)=>{
  console.log(params);
})
}
}
