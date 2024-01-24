import { Component, EventEmitter, Output, OnDestroy } from '@angular/core';

import { FraseModel } from '../shared/frase.model';

import { frases } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrl: './painel.component.scss'
})
export class PainelComponent implements OnDestroy {
  public frases: FraseModel[] = frases
  public resposta: string = ""
  instrucao: string = "Traduza a frase:"
  rodada: number = 0
  rodadaFrase: FraseModel = this.frases[this.rodada]
  progresso: number = 0;
  tentativas: number = 3

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()


  atualizaResposta(event: Event): void {
    this.resposta = (<HTMLInputElement>event.target).value
  }

  verificarResposta(event: Event): void {
    if (this.rodadaFrase.frasePtbr.toUpperCase() === this.resposta.toUpperCase()) {
      this.rodada++
      this.updateFrase()
      this.updateProgress()
      if (this.rodada === 4) {
        this.encerrarJogo.emit("vitoria")

      }
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
      this.encerrarJogo.emit("derrota")
    }
  }

  ngOnDestroy(): void {
    console.log("Destruido");
    
  }
}
