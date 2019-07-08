import { Component, OnInit } from '@angular/core';
import { AipomaService } from '../../../services/services';

@Component({
  selector: 'aipoma-FixedHeader',
  templateUrl: './FixedHeader.component.html',
  styleUrls: ['./FixedHeader.component.scss']
})
export class FixedHeaderComponent implements OnInit {

  constructor(private aipomaService : AipomaService) { }

  ngOnInit() {
  }

  public toggleSidebar()
   {
      this.aipomaService.sidenavOpen = !this.aipomaService.sidenavOpen;
   }

}
