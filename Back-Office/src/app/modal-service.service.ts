import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalServiceService {
  private dados: string[] = [];

  constructor() {}

  adicionarDado(dado: string) {
    this.dados.push(dado);
  }

  obterDados(): string[] {
    return this.dados;
  }
}
