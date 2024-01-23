import { Component, Input , OnChanges, SimpleChanges} from '@angular/core';
import { CoracaoModel } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrl: './tentativas.component.scss'
})
export class TentativasComponent implements OnChanges {

  coracaoCheio = "/assets/coracao_cheio.png"

  coracaoVazio = "/assets/coracao_vazio.png"

  coracoes: CoracaoModel[] = [new CoracaoModel(true), new CoracaoModel(true), new CoracaoModel(true)]

  @Input() tentativas: number = 3

  constructor(){
    console.log(this.tentativas);
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateCoracoes()
  }

  updateCoracoes(){
    if(this.tentativas != this.coracoes.length){
      const indice = this.coracoes.length - this.tentativas
      this.coracoes[indice -1].cheio = false
    }
  }

}
