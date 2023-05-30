import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent {
  num: string = '';  
  result: string = '';
  input: string = "0";
  action: string = " ";
  onClicCl(): void{
    this.input = "0";
    this.num ='';    
    this.result ='';
    this.action = " ";
  }

  onClicActionResult(){
    this.num = this.input;
    this.Actions();
    this.input = this.result;
    this.action = " ";
  }

  onClicAction(value: string): void{
    
    this.num = this.input;
    
    if (this.action!=" ") { 

      this.Actions();
      this.input = this.result;
      console.log(this.result)
      console.log(value);
      
    }else{
     
      this.result = this.num;
     console.log("else")
     this.input = this.result;
    }
     this.action = value;
    console.log("result = " + this.result)
     

  }

  onClicNum(value: string):void{
     if (this.input=="0" || this.input==this.result) {
      this.input=value;
    }else
     this.input=this.input+value;
    
  }

Actions(): void{
 switch(this.action){
  case '+':{    
    this.result = String(Number(this.result) + Number(this.num));
    console.log(this.num + "+" + this.num + "="+this.result);
    break;
  }
  case '-':{
    this.result = String(Number(this.result) - Number(this.num));
    break;
  }
  case '*':{
    this.result = String(Number(this.result) * Number(this.num));
    break;
  }
  case '/':{
    this.result = String(Number(this.result) / Number(this.num));
    break;
  }  
 }
}
}
