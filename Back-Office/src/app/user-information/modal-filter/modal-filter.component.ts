import {Component, EventEmitter, Output} from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-filter',
  templateUrl: './modal-filter.component.html',
  styleUrls: ['./modal-filter.component.css']
})

export class ModalFilterComponent {
  selectedCountry: string = '';
  selectedState: string = '';
  selectedDate: string = '';

  @Output() closeEmitter = new EventEmitter();
  @Output() confirmEmitter =  new EventEmitter();
  constructor(public bsModalRef: BsModalRef) {}


  confirmFilter() {
    if (!this.selectedCountry || !this.selectedState) {
      alert('Por favor, selecione um país e um estado antes de confirmar.');
      return;
    }

    this.confirmEmitter.emit({
      country: this.selectedCountry,
      state: this.selectedState,
      date: this.selectedDate
    });

    this.bsModalRef.hide();
  }
  closeEvent(){
    this.closeEmitter.emit()
  }

}




