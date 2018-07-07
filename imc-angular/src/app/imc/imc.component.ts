import { Component, OnInit, Input } from '@angular/core';
import { ImcService } from './imc.service';

@Component({
  selector: 'imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css']
})
export class ImcComponent implements OnInit {

  @Input() peso: number
  @Input() altura: number

  exibeResultados: boolean = false
  imc: number
  situacao: string

  imcService: ImcService;

 constructor(imcService: ImcService) {
    this.imcService = imcService;
  }

  ngOnInit() {
  }

  calculaImc() {
    this.imc = this.imcService.calculaImc(this.peso, this.altura);
    if (isNaN(this.imc)) {
      return;
    }
    this.situacao = this.imcService.classificaImc(this.imc);
    this.exibeResultados = true;
  }

}
