import { Component } from '@angular/core';

import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  animations: [
      trigger('animacja',[
        state('small', style({ height : '0px'})),
        state('large', style({ height : '100px'})),
        transition('small <=> large', animate('300ms ease-in'))
      ])
     ]  
})
export class Tab2Page {
  state: string = 'small';

  zaanimowany(){
  this.state = (this.state ==='small' ? 'large' : 'small');
  }
}


