import { Injectable } from '@angular/core';

@Injectable()
export class ImcService {

  constructor() { }

  calculaImc(peso: number, altura: number) : number {
    return peso / (altura * altura);
  }

  classificaImc(imc: number): string {
    if (imc < 18.5) {
      return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
      return 'Peso normal';
    } else if (imc >= 25) {
      return 'Acima do peso';
    }
  }

}
