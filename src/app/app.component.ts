import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // standalone: true,
  // imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Guilherme';
  jogoEmAndamento: boolean = true
  tipoEncerramento: boolean = true

  encerrarJogo(tipo: string): void {
    this.jogoEmAndamento = false
    if(tipo === "derrota"){
      this.tipoEncerramento = false
    } else {
      this.tipoEncerramento = true
    }

  }

  reiniciarJogo(){
    this.jogoEmAndamento = true
    this.tipoEncerramento = true
  }
}
