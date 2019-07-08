import { Component, OnInit } from '@angular/core';
import { AipomaService } from '../../../services/services';

@Component({
  selector: 'app-AboutUs',
  templateUrl: './AboutUs.component.html',
  styleUrls: ['./AboutUs.component.scss']
})
export class AboutUsComponent implements OnInit {

   teamData          : any;
   testimonialData   : any;
   missionVisionData : any;
   aboutInfo         : any;


   constructor(private aipomaService : AipomaService) { }

   ngOnInit() {
      this.getAboutInfo();
      this.getMissionVision();
      this.getTestimonialData();
      this.getTeamData();
   }

   public getAboutInfo() {
      this.aipomaService.getAboutInfo().valueChanges().subscribe(res => {this.aboutInfo = res});
   }

   public getMissionVision() {
      this.aipomaService.getMissionVision().valueChanges().subscribe(res => {this.missionVisionData = res});
   }

   public getTeamData() {
      this.aipomaService.getTeam().valueChanges().subscribe(res => {this.teamData = res});
   }

   public getTestimonialData() {
      this.aipomaService.getTestimonial().valueChanges().subscribe(res => {this.testimonialData = res});
   }
}

