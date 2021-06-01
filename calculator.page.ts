import { Component, OnInit } from '@angular/core';
// import { isNumber } from 'util';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {


  allNumberGroup = [
    [7, 8, 9, '/'],
    [4, 5, 6, '*'],
    [1, 2, 3, '-'],
    [0, 'C', '=', '+']
  ]

  buttonValue: any
  inputoperator: any

  initialValue = '0';
  oldvalue = '0';
  readyforinput: boolean = true;
  myoperator = '*'


  constructor() { }

  ngOnInit() {
  }

  numBtn(inputItem) {
    console.log("my btn", inputItem)
    this.buttonValue = inputItem

    // if(isNumber())                                                 isNumber function is not working
    // {

    // } 


    if (Number(inputItem)) {
      console.log("input is a number", inputItem)

      if (this.readyforinput) {
        this.initialValue = " " + inputItem
        console.log(this.initialValue)
      }

      else {
        this.initialValue += "" + inputItem
        console.log("message ", this.initialValue)

      }
      this.readyforinput = false;
    }

    // else if(){

    // }

    else if (inputItem === 'C') {
      this.initialValue = '0';
      this.readyforinput = true
    }

    else if (inputItem === '=') {
      if (this.myoperator === '*') {
        this.initialValue = " " + (parseInt(this.oldvalue) * parseInt(this.initialValue))
        console.log("after addition", this.initialValue)
      }
      else if (this.myoperator === '/') {
        this.initialValue = ' ' + (parseInt(this.oldvalue) / parseInt(this.initialValue))
      }
      else if (this.myoperator === '+') {
        this.initialValue = ' ' + (parseInt(this.oldvalue) + parseInt(this.initialValue))
      }
      else if (this.myoperator === '-') {
        this.initialValue = ' ' + (parseInt(this.oldvalue) - parseInt(this.initialValue))
      }
    }

   

    else {

      this.readyforinput = true;
      this.oldvalue = this.initialValue;
      this.myoperator = inputItem;
    }
  }
}
