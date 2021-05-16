import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio02',
  templateUrl: './exercicio02.component.html',
  styleUrls: ['./exercicio02.component.scss']
})
export class Exercicio02Component implements OnInit {
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
