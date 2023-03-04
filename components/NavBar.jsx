import React from 'react';
import { AiOutlineShopping } from 'react-icons/ai';

import { Cart } from './Cart';
import { useStateContext } from '../context/StateContext';

export const NavBar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <nav class="navbar navbar-expand-lg navbar-dark d-none d-lg-block" style={{ zIndex: 2000 }}>
      <div class="container-fluid">
        <a class="navbar-brand nav-link" target="_blank">
          <img src="/images/iseder_logo_small.webp" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarExample01"
          aria-controls="navbarExample01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarExample01">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item active">
              <a class="nav-link" aria-current="page" href="#intro" style={{ color: 'black', fontSize: '22px' }}>
                home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="" rel="nofollow" target="_blank" style={{ color: 'black', fontSize: '22px' }}>
                shop
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="" target="_blank" style={{ color: 'black', fontSize: '22px' }}>
                collections
              </a>
            </li>
          </ul>

          <ul class="navbar-nav list-inline">
            <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
              <AiOutlineShopping />
              <span className="cart-item-qty">{totalQuantities}</span>
            </button>
            {showCart && <Cart />}
          </ul>
        </div>
      </div>
    </nav>
  );
};
