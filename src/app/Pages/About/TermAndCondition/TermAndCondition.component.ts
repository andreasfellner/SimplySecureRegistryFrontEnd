import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../services/services';

@Component({
  selector: 'app-TermAndCondition',
  templateUrl: './TermAndCondition.component.html',
  styleUrls: ['./TermAndCondition.component.scss']
})
export class TermAndConditionComponent implements OnInit {

   termContions : any ;

   constructor(public appService: AppService) { }

   ngOnInit() {
      this.termContions = this.appService.getTermCondition();
   }

}
