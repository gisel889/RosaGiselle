import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    loop: true,
    autoplay: {
      disableOnInteraction: false
    }
  };

  slideOpts = {
    loop: true,
  };

  featured: any;
  imgDerecha: string;
  imgIzquierda: string;
  imgAbajoDerecha: string;
  imgAbajoIzquierda: string;



  constructor(public navCtrl: NavController) {
    this.featured = [
      {title: "Exploring San Francisco", author: "Rea Ramsey", body: "", picture: "https://picsum.photos/500/400?image=693"},
      {title: "Coffee the right way", author: "Ellesha Hartley", body: "", picture: "https://picsum.photos/500/400?image=1060"},
      {title: "Best Hiking In Yosemite", author: "Vinnie Alexander", body: "", picture: "https://picsum.photos/500/400?image=1043"},
      {title: "Astro Photography Guide", author: "Greg Rakozy", body: "", picture: "https://picsum.photos/500/400?image=903"}
    ];
     this.imgDerecha = "https://picsum.photos/500/400?image=903";
     this.imgIzquierda ="https://picsum.photos/500/400?image=1043";
     this.imgAbajoDerecha = "https://picsum.photos/500/400?image=1060";
     this.imgAbajoIzquierda = "https://picsum.photos/500/400?image=693";
  }
}
