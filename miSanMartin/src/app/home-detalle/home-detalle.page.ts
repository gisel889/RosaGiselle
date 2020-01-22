import { Component, OnInit } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-home-detalle',
  templateUrl: './home-detalle.page.html',
  styleUrls: ['./home-detalle.page.scss'],
})
export class HomeDetallePage implements OnInit {
  cards: { picture: string; descripcion:string, porcentaje:string  }[];
  slideOptsThumbs = {
    spaceBetween: 0,
    slidesPerView: 2.65,
  };

  constructor(private socialSharing: SocialSharing) {   
    this.cards = [
      {
        picture: "https://placem.at/people?overlay_color=feb75a&w=500&h=300",
        descripcion: "Primer descuento",
        porcentaje: "30%"
      },
      {
        picture: "https://placem.at/places?overlay_color=bec3af&w=500&h=300",
        descripcion: "Segundo descuento",
        porcentaje: "25%"
      },
      {
        picture: "https://placem.at/things?overlay_color=7f9bf2&w=500&h=300",
        descripcion: "Tercer descuento",
        porcentaje: "10%"}
    ];
  }
  sendShare(message, subject, url) {
    debugger;
    this.socialSharing.share(message, subject, null, url);
  } 

  ngOnInit() {
  }

}
