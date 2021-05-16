import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio04',
  templateUrl: './exercicio04.component.html',
  styleUrls: ['./exercicio04.component.scss']
})
export class Exercicio04Component implements OnInit {
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
