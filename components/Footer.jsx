import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export function Footer() {
  return (
    <MDBFooter bgColor="black" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block"></div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <img src="https://static.wixstatic.com/media/246c32_8018d9780f0b4bccae2fd982176ce439~mv2.png/v1/fill/w_196,h_88,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/font%20ready%20ready%20webbbbb.png" />
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h5 className="text-uppercase fw-bold mb-4">Links</h5>
              <p>
                <a href="#!" className="text-reset">
                  shop iseder
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  iseder runway
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Vue
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  contact iseder
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h5 className="text-uppercase fw-bold mb-4">Info</h5>
              <p>
                <a href="#!" className="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Settings
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <MDBRow className="mb-3">
                <div>
                  <a href="https://www.instagram.com/isederiseder" className="me-4 text-reset">
                    <MDBIcon fab icon="instagram" size="3x" />
                  </a>
                  <a href="https://www.youtube.com/@iseder6110" className="me-4 text-reset">
                    <MDBIcon fab icon="youtube" size="3x" />
                  </a>
                </div>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', color: 'white', fontSize: '18px' }}>
        Copyright © iseder 2020. All rights reserved.
      </div>
    </MDBFooter>
  );
}
