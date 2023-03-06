import React, { useState } from 'react';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from 'mdb-react-ui-kit';

const productsArray = [
  { name: 'Product 1', price: 9.99, image: '/images/_MG_0525.jpg', alternateImage: '/images/_MG_0655.jpg' },
  { name: 'Product 2', price: 19.99, image: '/images/_MG_0575.jpg', alternateImage: '/images/_MG_0525.jpg' },
  { name: 'Product 3', price: 29.99, image: '/images/_MG_0655.jpg' },
  { name: 'Product 4', price: 9.99, image: '/images/_MG_0470.jpg', alternateImage: '/images/_MG_0474.jpg' },
  { name: 'Product 5', price: 19.99, image: '/images/_MG_0481.jpg', alternateImage: '/images/_MG_0485.jpg' },
  { name: 'Product 6', price: 29.99, image: '/images/_MG_0655.jpg' },
  { name: 'Product 7', price: 9.99, image: '/images/_MG_0525.jpg' },
  { name: 'Product 8', price: 19.99, image: '/images/_MG_0575.jpg' },
  { name: 'Product 9', price: 29.99, image: '/images/_MG_0655.jpg' },
  { name: 'Product 10', price: 9.99, image: '/images/_MG_0525.jpg' },
  { name: 'Product 11', price: 19.99, image: '/images/_MG_0575.jpg' },
  { name: 'Product 12', price: 29.99, image: '/images/_MG_0655.jpg' },
];

export const Products = () => {
  const [items, setItems] = useState(productsArray);

  const handleMouseAction = (itemName) => {
    setItems(items.map((i) => (i.name === itemName ? { ...i, image: i.alternateImage, alternateImage: i.image } : i)));
  };

  return (
    <div style={{ backgroundColor: 'black' }}>
      <MDBContainer>
        <MDBRow>
          {items.map((product) => (
            <MDBCol md={4} key={product.name}>
              <div class="col">
                <div class="p-3"></div>
              </div>
              <MDBCard>
                <MDBCardImage
                  variant="top"
                  src={product.image}
                  onMouseEnter={() => handleMouseAction(product.name, product.alternateImage)}
                  onMouseLeave={() => handleMouseAction(product.name, product.image)}
                />
                <MDBCardBody>
                  <MDBCardTitle color="white">{product.name}</MDBCardTitle>
                  <MDBCardText>${product.price}</MDBCardText>
                  <MDBBtn type="button" color="dark" className="add-to-cart" onClick={() => onAdd(product, qty)}>
                    Add to Cart
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

// export const getServerSideProps = async () => {
//   const query = '*[_type == "product"]';
//   const products = await client.fetch(query);

//   return {
//     props: { products },
//   };
// };
