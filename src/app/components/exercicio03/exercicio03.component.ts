import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio03',
  templateUrl: './exercicio03.component.html',
  styleUrls: ['./exercicio03.component.scss']
})
export class Exercicio03Component implements OnInit {
  counter = 0;
  intervalId;

  constructor() { }

  ngOnInit(): void {}

  numero(){
    if(this.counter<60) this.counter++;
    else clearInterval(this.intervalId);;
  }

  iniciar(){
    let intervalId = setInterval(() => {
      this.numero();
  }, 1000)
  }

}
