import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IDactivateGaurd } from '../services/gaurds/deactivate-gaurd.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit, IDactivateGaurd {
ngOnInit(): void {
  
}
canExit(){
  if(confirm("Are you sure you want to exit?")){
    return true;
  }
  else{
         return false;
  }
}
}
