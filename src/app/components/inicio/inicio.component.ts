import { Component, ViewChild } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CommonModule } from '@angular/common';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  imports: [SlickCarouselModule, CommonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  constructor(private router: Router){}

  
   avanzarCitas(){
    this.router.navigate(['/citas']);
  }

  listaSlides = [
    { img: "assets/Unas.jpg",    alt: 'Diseño 1', Title: 'Uñas Acrilicas', Description: 'Uñas acrilicas con diseño espectacular' },
    { img: "assets/Diseno2.jpg", alt: 'Diseño 2', Title: 'Manicure & Pedicure', Description: 'Manicure y pedicure con productos de alta calidad' },
    { img: "assets/Diseno3.jpg", alt: 'Diseño 3', Title: 'Diseño 3D', Description: 'Arte en tus uñas para ocasiones especiales' },
    { img: "assets/Diseno4.jpg", alt: 'Diseño 4', Title: 'Peinados', Description: 'Peinados únicos y personalizados' }
  ]

   listaTestimonios = [ 
    { texto: 'Me encantaron mis uñas, ¡súper profesionales!', cliente: 'Laura M.' },
    { texto: 'El mejor salón de uñas, 100% recomendado.', cliente: 'Karen G.' },
    { texto: 'Excelente servicio y ambiente acogedor.', cliente: 'Sofía R.' },
    
  ]


slideConfig = {
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,       //  no mostrar dots
  arrows: false,     //  no mostrar flechas
  infinite: true,
  swipe: true,       //  permite arrastrar con el mouse o dedo
  draggable: true,   //  arrastrable en desktop
  touchMove: true,   //  arrastrable en móvil
};
  @ViewChild('slickModal')
  slickModal!: SlickCarouselComponent;









}
