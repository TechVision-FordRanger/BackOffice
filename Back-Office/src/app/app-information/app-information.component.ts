import { Component } from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {ModalFilterComponent} from "../modal-filter/modal-filter.component";

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

  showModalFilter = false;



  getCircleColor(percentage: number): string {
    if (percentage > 0) {
      return '#97FED9';
    } else {
      return '#E87094';
    }
  }

  dataList =
    [
      { "store": "Ford Elite Motors", "requestId": "12345", "autoPart": "Pneu", "quantity": "2", "unityPrice": "R$900", "totalPrice": "R$1800", "stock": "15000", "storeLocation": "São Paulo" },
      { "store": "Ford MasterTech", "requestId": "54321", "autoPart": "Freio", "quantity": "4", "unityPrice": "R$300", "totalPrice": "R$1200", "stock": "12000", "storeLocation": "Campinas" },
      { "store": "Ford Drive Solutions", "requestId": "67890", "autoPart": "Radiador", "quantity": "1", "unityPrice": "R$700", "totalPrice": "R$700", "stock": "9800", "storeLocation": "Santos" },
      { "store": "Ford AutoFix", "requestId": "98765", "autoPart": "Bateria", "quantity": "3", "unityPrice": "R$500", "totalPrice": "R$1500", "stock": "11000", "storeLocation": "Osasco" },
      { "store": "Ford GearHouse", "requestId": "45678", "autoPart": "Alternador", "quantity": "2", "unityPrice": "R$800", "totalPrice": "R$1600", "stock": "8900", "storeLocation": "Sorocaba" },
      { "store": "Ford AutoCenter", "requestId": "11223", "autoPart": "Vela", "quantity": "10", "unityPrice": "R$50", "totalPrice": "R$500", "stock": "20000", "storeLocation": "Ribeirão Preto" },
      { "store": "Ford MechPro", "requestId": "33445", "autoPart": "Filtro de Ar", "quantity": "5", "unityPrice": "R$100", "totalPrice": "R$500", "stock": "17000", "storeLocation": "São José dos Campos" },
      { "store": "Ford DriveTech", "requestId": "55667", "autoPart": "Correia", "quantity": "3", "unityPrice": "R$250", "totalPrice": "R$750", "stock": "13000", "storeLocation": "Bauru" },
      { "store": "Ford AutoHub", "requestId": "77889", "autoPart": "Amortecedor", "quantity": "2", "unityPrice": "R$1200", "totalPrice": "R$2400", "stock": "5000", "storeLocation": "São Carlos" },
      { "store": "Ford MechMasters", "requestId": "99å01", "autoPart": "Pastilha de Freio", "quantity": "8", "unityPrice": "R$150", "totalPrice": "R$1200", "stock": "14000", "storeLocation": "Mogi das Cruzes" },
      { "store": "Ford AutoCraft", "requestId": "22334", "autoPart": "Lanterna", "quantity": "4", "unityPrice": "R$400", "totalPrice": "R$1600", "stock": "7500", "storeLocation": "Piracicaba" },
      { "store": "Ford DriveMasters", "requestId": "44556", "autoPart": "Retrovisor", "quantity": "2", "unityPrice": "R$600", "totalPrice": "R$1200", "stock": "6800", "storeLocation": "Franca" },
      { "store": "Ford AutoElite", "requestId": "66778", "autoPart": "Bomba de Combustível", "quantity": "1", "unityPrice": "R$900", "totalPrice": "R$900", "stock": "4200", "storeLocation": "Taubaté" },
      { "store": "Ford MechElite", "requestId": "88990", "autoPart": "Escapamento", "quantity": "1", "unityPrice": "R$1100", "totalPrice": "R$1100", "stock": "3900", "storeLocation": "Limeira" },
      { "store": "Ford DriveElite", "requestId": "00223", "autoPart": "Catalisador", "quantity": "1", "unityPrice": "R$1300", "totalPrice": "R$1300", "stock": "3100", "storeLocation": "Suzano" },
      { "store": "Ford Elite Motors", "requestId": "12345", "autoPart": "Pneu", "quantity": "2", "unityPrice": "R$900", "totalPrice": "R$1800", "stock": "15000", "storeLocation": "São Paulo" },
      { "store": "Ford MasterTech", "requestId": "54321", "autoPart": "Freio", "quantity": "4", "unityPrice": "R$300", "totalPrice": "R$1200", "stock": "12000", "storeLocation": "Campinas" },
      { "store": "Ford Drive Solutions", "requestId": "67890", "autoPart": "Radiador", "quantity": "1", "unityPrice": "R$700", "totalPrice": "R$700", "stock": "9800", "storeLocation": "Santos" },
      { "store": "Ford AutoFix", "requestId": "98765", "autoPart": "Bateria", "quantity": "3", "unityPrice": "R$500", "totalPrice": "R$1500", "stock": "11000", "storeLocation": "Osasco" },
      { "store": "Ford GearHouse", "requestId": "45678", "autoPart": "Alternador", "quantity": "2", "unityPrice": "R$800", "totalPrice": "R$1600", "stock": "8900", "storeLocation": "Sorocaba" },
      { "store": "Ford AutoCenter", "requestId": "11223", "autoPart": "Vela", "quantity": "10", "unityPrice": "R$50", "totalPrice": "R$500", "stock": "20000", "storeLocation": "Ribeirão Preto" },
      { "store": "Ford MechPro", "requestId": "33445", "autoPart": "Filtro de Ar", "quantity": "5", "unityPrice": "R$100", "totalPrice": "R$500", "stock": "17000", "storeLocation": "São José dos Campos" },
      { "store": "Ford DriveTech", "requestId": "55667", "autoPart": "Correia", "quantity": "3", "unityPrice": "R$250", "totalPrice": "R$750", "stock": "13000", "storeLocation": "Bauru" },
      { "store": "Ford AutoHub", "requestId": "77889", "autoPart": "Amortecedor", "quantity": "2", "unityPrice": "R$1200", "totalPrice": "R$2400", "stock": "5000", "storeLocation": "São Carlos" },
      { "store": "Ford MechMasters", "requestId": "99001", "autoPart": "Pastilha de Freio", "quantity": "8", "unityPrice": "R$150", "totalPrice": "R$1200", "stock": "14000", "storeLocation": "Mogi das Cruzes" },
      { "store": "Ford MechElite", "requestId": "88990", "autoPart": "Escapamento", "quantity": "1", "unityPrice": "R$1100", "totalPrice": "R$1100", "stock": "3900", "storeLocation": "Limeira" }
    ];

    closeFilterModal(){
        this.showModalFilter =false;
    }
    openModal(){
    this.bsModalRef = this.modalService.show(ModalFilterComponent);
    }
    bsModalRef!: BsModalRef<ModalFilterComponent>;

  applyFilter(filterValues: { country: string, state: string, date: string }) {

    let filteredData = [...this.dataList];

    // Filtre com base no país (se for selecionado)
    if (filterValues.country) {
      filteredData = filteredData.filter(data => data.storeLocation === filterValues.country);
    }

    // Filtre com base no estado (se for selecionado)
    if (filterValues.state) {
      filteredData = filteredData.filter(data => data.storeLocation === filterValues.state);
    }


    this.dataList = filteredData;
  }

  constructor(private modalService: BsModalService) {}

  ngOnInit(): void { }

}
