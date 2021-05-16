import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio01',
  templateUrl: './exercicio01.component.html',
  styleUrls: ['./exercicio01.component.scss']
})
export class Exercicio01Component implements OnInit {
  counter = 0;
  intervalId;
  botao = "Iniciar";

  constructor() { }

  ngOnInit(): void {}

  numero(){
    if(this.counter<60) this.counter++;
    else clearInterval(this.intervalId);
  }

  iniciar(){
    if(this.botao!="Pare"){
      this.botao="Pare"
      let intervalId = setInterval(() => {
        this.numero();
      }, 1000)
    }else{
      clearInterval(this.intervalId);
      this.counter = 0;
      this.botao="Iniciar";
    }
  }

}

