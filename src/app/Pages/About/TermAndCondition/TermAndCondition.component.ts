import { Component, OnInit } from '@angular/core';
import { AipomaService } from '../../../services/services';

@Component({
  selector: 'app-TermAndCondition',
  templateUrl: './TermAndCondition.component.html',
  styleUrls: ['./TermAndCondition.component.scss']
})
export class TermAndConditionComponent implements OnInit {

   termContions : any ;

   constructor(public aipomaService: AipomaService) { }

   ngOnInit() {
      this.termContions = this.aipomaService.getTermCondition();
   }

}
