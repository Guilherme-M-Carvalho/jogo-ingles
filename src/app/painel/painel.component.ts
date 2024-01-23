import { Component } from '@angular/core';

import { FraseModel } from '../shared/frase.model';

import { frases } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrl: './painel.component.scss'
})
export class PainelComponent {
  public frases: FraseModel[] = frases
  public resposta: string = ""
  instrucao: string = "Traduza a frase:"
  rodada: number = 0
  rodadaFrase: FraseModel = this.frases[this.rodada]
  progresso: number = 0;
  tentativas: number = 3


  atualizaResposta(event: Event): void {
    this.resposta = (<HTMLInputElement>event.target).value
  }

  verificarResposta(event: Event): void {
    if (this.rodadaFrase.frasePtbr.toUpperCase() === this.resposta.toUpperCase()) {
      this.rodada++
      this.updateFrase()
      this.updateProgress()
    } else {
      this.updateTentativas()
    }

  }

  updateFrase() {
    this.rodadaFrase = this.frases[this.rodada]
    this.resposta = ""
  }

  updateProgress() {
    this.progresso = this.progresso + (100 / this.frases.length)
  }

  updateTentativas() {
    this.tentativas--
    if (this.tentativas === -1) {

    }
  }
}
