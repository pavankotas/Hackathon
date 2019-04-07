import { Component, OnInit } from '@angular/core';
import {PermitService} from '../../../services/permit.service';
import {LocationService} from '../../../services/AccountOwner/location.service';


@Component({
  selector: 'app-add-permit',
  templateUrl: './add-permit.component.html',
  styleUrls: ['./add-permit.component.sass']
})
export class AddPermitComponent implements OnInit {
private permitData;
private locationData:any;
private distinctLocations : Array<any> = [];
  private parkingSlots : Array<any> = [];
  private parkingLocations: Array<any> =[];

  constructor(private permitService: PermitService, private locationService: LocationService) { }
addPermit(formdata){
   console.log(formdata);
   let selectedParkingLot =  this.parkingLocations.filter(location=>location.parkingLotName === formdata.parkingLotName);
   console.log(selectedParkingLot[0]._id);
   if(selectedParkingLot[0].available>0){
     this.permitService.addPermit(formdata).subscribe(res => {
       console.log(res);
       let updatedParkingLotData =selectedParkingLot[0];
       updatedParkingLotData.available =  updatedParkingLotData.available-1;
       updatedParkingLotData.occupied =  updatedParkingLotData.occupied+1;
       this.locationService.updateSlotAvailability(selectedParkingLot[0]._id,updatedParkingLotData);
       this.permitService.getAllPermits().subscribe(res => {
         console.log(res);
         this.permitData=res;
       })
     }, (err) => {
       console.log("Error in creating permit: ", err.error);
     });
   }else{
     alert("No slots available");
   }


};

  getParkingLocations(selectedLocation){
    this.parkingLocations = Array.from(new Set(this.locationData.filter(location => selectedLocation===location.address)));
    console.log(this.parkingLocations);
  };


  ngOnInit() {
    this.permitService.getAllPermits().subscribe(res => {
      console.log(res);
     this.permitData=res;
    });
    this.locationService.getLocation().subscribe(res=>{
      console.log(res);
      this.locationData = res;
      this.distinctLocations = Array.from(new Set(this.locationData.map(location => location.address)));
      console.log(this.distinctLocations);
    })

  }

}
