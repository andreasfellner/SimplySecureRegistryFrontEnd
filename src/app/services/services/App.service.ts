import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MatDialogRef, MatDialog } from '@angular/material';
import { ToastaConfig } from 'ngx-toasta';
import 'rxjs/Rx';

import { ConfirmationPopupComponent } from '../../Global/ConfirmationPopup/ConfirmationPopup.component';

@Injectable({
   providedIn: 'root'
 })

export class AppService {

   sidenavOpen                 : boolean = false;
   paymentSidenavOpen          : boolean = false;

   featuredProductsSelectedTab : any = 0;
   newArrivalSelectedTab       : any = 0;


   shipping  : number = 12.95;
   tax       : number = 27.95;

   localStorageNotificationItems : any;
   localStorageCartProducts : any;
   localStorageWishlist : any;
   navbarCartCount : number = 0;
   navbarWishlistProdCount = 0;
   buyUserCartProducts : any;
   
   constructor(private http:HttpClient, 
               private dialog: MatDialog, 
               private toastyConfig: ToastaConfig) { 

      this.toastyConfig.position = "top-right";
      this.toastyConfig.theme = "material";
      localStorage.removeItem("user");
      
   }
 

   public confirmationPopup(message:string)
   {
      let confirmationPopup: MatDialogRef<ConfirmationPopupComponent>;
      confirmationPopup = this.dialog.open(ConfirmationPopupComponent);
      confirmationPopup.componentInstance.message = message;
      return confirmationPopup.afterClosed();
   }

   public getContactInfo()
   {
      let contact : any;
      contact = 
      {
         address: "Eidsbergveien 9, 1811 Askim, Norway",//"1899 Cemetery Street,MEDFORD - 1452451 New York",
         call: "+47 22832680",
         info: "If you have any problems, suggestions and feedback, please feel free to contact us. Choose our communication soruces. We would love to hear from you.",
         mail: "support@deltagruppen.no"
      };

      return contact;
   }

   public getTermCondition()
   {
      let termCondition : any;
      termCondition = [
         {
            "content":"<p> Upon joining or viewing SimplySecure services or any of the services SimplySecure is a part of or provides, you are agreeing to be bound by the following terms and conditions ('Terms of Service') </p>",
            "name":""
         },
         {
            "content":" <ol> <li> Du bør være 18 år eller mer erfarne eller hvis ikke noe annet tidspunktet for dominerende del i lokalområdet der du bor eller hvor du bruker denne tjenesten. </li> <li> For å få tilgang til og bruke tjenestene, bør du registrere deg for en Læ Item ved å gi ditt fulle legitime navn, nåværende adresse, telefonnummer, en betydelig e-postadresse og noen andre data som demonstrerer etter behov. Lærer kan avvise søknaden din for en konto, eller fjerne en gjeldende konto, av en eller annen grunn, i vår eneste forsiktighet. </li> </ol> <p> </p>",
            "name":"1. Kontovilkår "
         },
         {
            "content":" <h6>2.1 SimplySecure Account</h6> <ol> <li> Med forbehold for område 2.1.2, vil den enkelte som godtar Tjenesten, være avtalt part av grunnene til våre Servicevilkår og vil være den som er godkjent for å benytte en sammenligningskonto vi kan gi til Kontoinnehaveren angående Tjenesten. </li> <li> Hvis du godtar Tjenesten til fordel for sjefen din, bør sjefen din være Account Eier. På sjansen for at du aksepterer å godta Tjenesten for din leder, snakker du på det tidspunktet og garanterer at du har spesialisten å knytte sjefen din til våre brukervilkår. </li> </ol>",
            "name":"2. Kontoaktivering"
         },
         {
            "content":" <h6>Du må lese, godta og godta alle vilkårene i disse vilkårene, inkludert AUP og personvernreglene før du kan bli medlem av SimplySecure.</h6> <ol> <li> Teknisk støtte er gitt til alle kontoinnehavere og er kun tilgjengelig via e-post og live chat. </li> <li> Servicevilkårene bør være representert av og oversatt i henhold til lovene i staten Illinois og de amerikanske lovgivningen som er relevante i det, uten hensyn til lovens krav. Samlingene unalterably og genuint underkastes eliten avdelingen av domstolene i staten Illinois som for enhver debatt eller sak som kommer ut av eller om vilkårene for bruk. FNs konvensjon om kontrakter for internasjonal salg av varer vil ikke ha betydning for disse vilkårene og er dermed eksplisitt unngått.</li>",
            "name":"3. Generelle betingelser"
         }
      ];
      return termCondition;
   }

   public getPrivacyPolicy()
   {
      let privacyPolicy : any;
      privacyPolicy = [
         {
            "content":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore. ",
            "name":"Hvilken type informasjon vi samlet på vår side?"
         },
         {
            "content":"Sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore. dolor sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore.",
            "name":"Er vår informasjon sikret? "
         },
         {
            "content":"Rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore. dolor sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore.  ",
            "name":"Gir vi informasjon om brukeren til annonsebyråer?"
         },
         {
            "content":"<h5> Address: </h5> <p> Eidsbergveien 9, 1811 Askim, Norway </p> <h5> Email: </h5> <p> support@deltagruppen.no </p> <h5> Kontaktnummer. </h5> <p> +47 968 66 886 </p>",
            "name":"Hvis du har et juridisk problem eller en tvist, ta kontakt med følgende:"
         }
      ];
      return privacyPolicy;
   }

   public getFaq()
   {
      let faq : any;
    
      faq = {
         "can_get_answer":{
               "content":"If you are unable to get the answers, feel free to contact us by submitting a support request. We would love to hear from you.",
               "heading":"Didn't get your answer here??"
            },
         "content":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, aspernatur minus voluptatibus quaerat officiis, incidunt maiores, tempora nam eaque ab consequatur tenetur explicabo voluptatem vel voluptatum perspiciatis accusantium. Illum, nemo?",
         "faqs":[
               {	
                  "ans":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fugit asperiores voluptas. Ipsum expedita nostrum architecto eum adipisci ipsa quod illo error aliquid impedit facilis sunt nobis qui, voluptatem deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fugit asperiores voluptas. Ipsum expedita nostrum architecto eum adipisci ipsa quod illo error aliquid impedit facilis sunt nobis qui, voluptatem deserunt.",
                  "ques":"How to change my account password??"
               },
               {
                  "ans":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fugit asperiores voluptas. Ipsum expedita nostrum architecto eum adipisci ipsa quod illo error aliquid impedit facilis sunt nobis qui, voluptatem deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fugit asperiores voluptas. Ipsum expedita nostrum architecto eum adipisci ipsa quod illo error aliquid impedit facilis sunt nobis qui, voluptatem deserunt.",
                  "ques":"How to disable account??"
               }
            ],
            
            "heading":"Get immediate answers to the most common questions"
      };

      return faq;
   }


   public getTeam()
   {
      let team : any;

      team = [
         {
            "description":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque esse iure aliquid enim, corrupti distinctio sit praesentium ducimus incidunt rem facilis expedita illo at tempore natus nihil veritatis accusamus vel.",
            "designation":"CEO",
            "id":1,
            "image":"assets/images/user-1.jpg",
            "name":"Anthony Gilbert"
         },
         {
            "description":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque esse iure aliquid enim, corrupti distinctio sit praesentium ducimus incidunt rem facilis expedita illo at tempore natus nihil veritatis accusamus vel.",
            "designation":"CEO",
            "id":2,
            "image":"assets/images/user-2.jpg",
            "name":"Anthony Gilbert"
         },
         {
            "description":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque esse iure aliquid enim, corrupti distinctio sit praesentium ducimus incidunt rem facilis expedita illo at tempore natus nihil veritatis accusamus vel.",
            "designation":"CEO",
            "id":3,
            "image":"assets/images/user-3.jpg","name":"Anthony Gilbert"
         }
      ];
      return team;
   }

   public getTestimonial() {
      let testimonial : any;

      testimonial = {
         "description":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut expedita quasi voluptatibus tenetur nisi ad earum atque laboriosam accusamus. Doloremque sapiente aliquid quae. Animi ratione dolorum repellat amet nihil? Magnam?",
         "designation":"Head, ABS Infos",
         "id":1,
         "image":"assets/images/user-1.jpg",
         "name":"Albert Gomes"
      };

      return testimonial;
   }

   public getMissionVision() {
      let mission_vision : any;
      mission_vision =  [
         {
            "content":"Ved bruk av systemet får deltakeren jevnlige påminnelser og tilbakemeldinger rett i sin egen telefon, og en veileder kan følge opp en rekke deltakere.",
            "heading":"Vårt oppdrag",
            "id":"1",
            "image":"assets/images/our-mission.jpg",
            "sub_heading":"Vil du prøve systemet?"
         },
         {
            "content":"Ved bruk av systemet får deltakeren jevnlige påminnelser og tilbakemeldinger rett i sin egen telefon, og en veileder kan følge opp en rekke deltakere.",
            "heading":"Vår visjon",
            "id":"2","image":"assets/images/our-vision.jpg",
            "sub_heading":"Vil du prøve systemet?"
         }
      ];

      return mission_vision;
   }

   public getAboutInfo() {
      let about_info : any;
      about_info = {
         "content":"Vi tror de beste resultatene kommer når en god veileder kan bistå et menneske som er i endring. Derfor baserer SRService seg på et tett samarbeid mellom veileder og en deltaker. Først samarbeider deltakeren med en veileder for å komme frem til deltakerens hovedmål, hvilke delmål som er passende underveis, og hvilke oppgaver han eller hun må utføre for å komme frem til de forskjellige målene. Et jobbønske kan være et av flere delmål.Dette arbeidet gir ei oppgaveliste, som deltakeren plotter inn appens kalender.",
         "heading":"SRService er et web/appsystem for å følge opp mennesker i endringsprosesser.",
         "id":1,"image":"assets/images/about-us.jpg",
         "sub_heading":"Vil du prøve systemet?"
      }
      return about_info;
   }

}
