import React from 'react';
import Link from 'next/link';

import { AiOutlineShopping } from 'react-icons/ai';

import { Cart } from './Cart';
import { useStateContext } from '../context/StateContext';

export const NavBar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <nav class="navbar navbar-expand-lg navbar-dark d-none d-lg-block" style={{ zIndex: 2000 }}>
      <div class="container-fluid">
        <Link class="navbar-brand nav-link" href='/'>
          <img src="/images/iseder_logo_small.webp" />
        </Link>
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
              <a class="nav-link" href="/" style={{ color: 'black', fontSize: '22px' }}>
                home
              </a>
            </li>
            <Link class="nav-link" href="/ProductCatalog" style={{ color: 'black', fontSize: '22px' }} passHref>
              shop
            </Link>
            <li class="nav-item">
              <a class="nav-link" href="/collections" style={{ color: 'black', fontSize: '22px' }}>
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
