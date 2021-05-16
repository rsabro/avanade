import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio01',
  templateUrl: './exercicio01.component.html',
  styleUrls: ['./exercicio01.component.scss']
})
export class Exercicio01Component implements OnInit {
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

