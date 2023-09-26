import { Component } from '@angular/core';

@Component({
  selector: 'app-app-information',
  templateUrl: './app-information.component.html',
  styleUrls: ['./app-information.component.css']
})
export class AppInformationComponent {

  //valores mockados
  topFeature: string = "Câmera Inteligente";
  featurePercentage: number = 30;

  appVisits: string = "19.2749";
  visitsPercentage: number = 15;

  maintenanceRequests: string = "2.091";
  maintenancePercentage: number = -40;

  emergencies: string = "103";
  emergenciesPercentage: number = -140;



  getCircleColor(percentage: number): string {
    if (percentage > 0) {
      return '#97FED9';
    } else {
      return '#E87094';
    }
  }

  constructor() {}

  ngOnInit(): void {}

}
