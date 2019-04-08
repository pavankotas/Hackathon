import { Component, OnInit } from '@angular/core';
import {LocationService} from '../../services/AccountOwner/location.service';
import {PermitService} from '../../services/permit.service';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  private allParkingSLocations;
  private totalSlots;
  private availableSlots;
  private occupiedSlots;
  private toatlPermits;
  private locationData:any;
//---------------------------------------------------------------------------------
  public pieChartType: ChartType = 'pie';
  public pieChartColors = [
    {
      backgroundColor: ['#edfe9e', '#fc4642'],
    },
  ];
  public pieChartData: number[]=[];
  public pieChartLabels: Label[] = [ 'Total Available Slots','Total Occupied Slots'];

  //------------------------------------------------------------------------------------
  //---------------------------------------------------------------------------------
  public pieChartType2: ChartType = 'pie';
  public pieChartColors2 = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
    },
  ];
  public pieChartData2: number[]=[];
  public pieChartLabels2: Label[] = [ ];

  //------------------------------------------------------------------------------------
  constructor(private locationService : LocationService, private permitService : PermitService) { }

  ngOnInit() {
    this.locationService.getLocation().subscribe(res=>{
      console.log(res);
      this.locationData = res;
      this.allParkingSLocations = this.locationData.map(location => location.parkingLotName);
      this.pieChartLabels2 = this.allParkingSLocations;
      console.log(this.allParkingSLocations);

      this.totalSlots = this.locationData.map(location => location.noOfLots);
      this.totalSlots = this.totalSlots.reduce(getSum);
      console.log( this.totalSlots);

      this.availableSlots = this.locationData.map(location => location.available);
      this.pieChartData2 = this.availableSlots;
      this.availableSlots = this.availableSlots.reduce(getSum);
      console.log(this.availableSlots);

      this.occupiedSlots = this.locationData.map(location => location.occupied);
      console.log(this.occupiedSlots);
      this.occupiedSlots = this.occupiedSlots.reduce(getSum);
     this.pieChartData.push(this.availableSlots);
    this.pieChartData.push(this.occupiedSlots);
    });
    function getSum(total, num) {
      return total + num;
    }

    this.permitService.getAllPermits().subscribe(res => {
      console.log(res);
      this.toatlPermits = res;
    });
  }

}
