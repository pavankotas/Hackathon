import { Component, OnInit } from '@angular/core';
import {PermitService} from '../../../services/permit.service';

@Component({
  selector: 'app-add-permit',
  templateUrl: './add-permit.component.html',
  styleUrls: ['./add-permit.component.sass']
})
export class AddPermitComponent implements OnInit {
private permitData;
  constructor(private permitService: PermitService) { }
addPermit(formdata){
   console.log(formdata);
this.permitService.addPermit(formdata).subscribe(res => {
  console.log(res);
  this.permitService.getAllPermits().subscribe(res => {
    console.log(res);
    this.permitData=res;
  })
}, (err) => {
  console.log("Error in creating permit: ", err.error);
});
;
}
  ngOnInit() {
    this.permitService.getAllPermits().subscribe(res => {
      console.log(res);
     this.permitData=res;
    })
  }

}
