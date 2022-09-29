import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-componant',
  templateUrl: './data-componant.component.html',
  styleUrls: ['./data-componant.component.scss']
})
export class DataComponantComponent implements OnInit {

  isTrue: boolean = false;
  inputValue: string = ''

  constructor() { }


  onClickMe() {
    if (this.inputValue == 'true') {
      this.isTrue = true;
    } else if (this.inputValue == 'false') {
      this.isTrue = false;
    }
  }

  ngOnInit(): void {
  }

}
