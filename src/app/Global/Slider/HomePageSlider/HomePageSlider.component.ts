import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-HomePageSlider',
  templateUrl: './HomePageSlider.component.html',
  styleUrls: ['./HomePageSlider.component.scss']
})
export class HomePageSliderComponent implements OnInit, OnChanges {

   @Input() isRTL : boolean = false;

   slideConfig : any;

   slides : any = [
      {
         img         : "assets/images/h-slider-1.jpg",
         content     : "Hire top tech talent and quickly scale your delivery capacity. Our engineers have the necessary niche skills, deep expertise, and are highly loyal.",
         heading_one : "DEDICATED DEVELOPMENT TEAMS",
        
      },
      {
         img         : "assets/images/h-slider-2.jpg",
         content     : "Build secure enterprise Internet of Things (IoT) solutions that will help your business gather Big Data, optimise operations, and unlock a new level of efficiency.",
         heading_one : "CUSTOM IoT DEVELOPMENT SERVICES",
   
      }, 
      {
         img         : "assets/images/h-slider-3.jpg",
         content     : "Use equally practical and exciting AR solutions to elevate your key operations, improve employee efficiency, and excite your customers.",
         heading_one : "CUSTOM AUGMENTED REALITY SOLUTIONS",
      },
      {
         img         : "assets/images/h-slider-3.jpg",
         content     : "Blockchain consulting, private blockchains, Smart Contracts, identity solutions - we offer you a full suite of blockchain development services.",
         heading_one : "BLOCKCHAIN DEVELOPMENT",
      }
   ]

   constructor() { }

   ngOnInit() {
   }

   ngOnChanges() {
      this.slideConfig = {
         infinite: true,
         slidesToShow: 1,
         slidesToScroll: 1,
         autoplay: true,
         autoplaySpeed: 2000,
         dots: false,
         rtl: this.isRTL,
         responsive: [
            {
               breakpoint: 991,
               settings: {
                  arrows: false,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  autoplay: true,
                  autoplaySpeed: 2000
               }
            },
            {
               breakpoint: 768,
               settings: {
                  arrows: false,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  autoplay: true,
                  autoplaySpeed: 2000
               }
            },
            {
               breakpoint: 480,
               settings: {
                  arrows: false,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  autoplay: true,
                  autoplaySpeed: 2000
               }
            }
         ]
      };
   }

}
