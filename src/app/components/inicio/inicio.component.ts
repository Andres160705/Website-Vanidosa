import { Component, ViewChild } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CommonModule } from '@angular/common';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-inicio',
  imports: [SlickCarouselModule, CommonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  listaSlides = [
    { img: "assets/Unas.jpg",    alt: 'Diseño 1', Title: 'Uñas Acrilicas', Description: 'Uñas acrilicas con diseño espectacular' },
    { img: "assets/Diseno2.jpg", alt: 'Diseño 2', Title: 'Manicure & Pedicure', Description: 'Manicure y pedicure con productos de alta calidad' },
    { img: "assets/Diseno3.jpg", alt: 'Diseño 3', Title: 'Diseño 3D', Description: 'Arte en tus uñas para ocasiones especiales' },
    { img: "assets/Diseno4.jpg", alt: 'Diseño 4', Title: 'Peinados', Description: 'Peinados únicos y personalizados' }
  ]

  slideConfig = { "slidesToShow": 2, "slidesToScroll": 1, "infinite": true, centerMode:false, responsive:[{
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }] };
  @ViewChild('slickModal')
  slickModal!: SlickCarouselComponent;

}
