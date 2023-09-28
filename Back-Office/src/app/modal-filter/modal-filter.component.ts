import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BsModalRef} from "ngx-bootstrap/modal";

@Component({
  selector: 'app-modal-filter',
  templateUrl: './modal-filter.component.html',
  styleUrls: ['./modal-filter.component.css']
})
export class ModalFilterComponent {
  @Input() title = 'filtros';
  @Output() confirmEmitter =  new EventEmitter();
constructor(public bsModalRef: BsModalRef) {
}

confirmFilter(){
  this.confirmEmitter.emit();
}

}
