import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';

export function Carousel() {
  return (
    <MDBCarousel showControls showIndicators>
      <MDBCarouselItem className="w-100 d-block" itemId={1} src="/images/iseder_sounds_banner.webp" alt="..." />
      <MDBCarouselItem className="w-100 d-block" itemId={2} src="/images/_MG_0525.jpg" alt="..." />
      <MDBCarouselItem className="w-100 d-block" itemId={3} src="/images/_MG_0575.jpg" alt="..." />
      <MDBCarouselItem className="w-100 d-block" itemId={3} src="/images/_MG_0655.jpg" alt="..." />
    </MDBCarousel>
  );
}
