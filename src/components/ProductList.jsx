import React, { useEffect, useState, useContext } from 'react';
import wooCommerceApi from '../woocommerceApi';
import { CartContext } from '../context/CartContext';

const ProductList = () => {
  const [donations, setDonations] = useState([]);
  const [merchandise, setMerchandise] = useState([]);
  const [otherDonations, setOtherDonations] = useState([]);
  const { addToCart } = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        // Fetch donations products
        const donationsResponse = await wooCommerceApi.get('/products/', {
          params: { category: '17' }, // Replace with donations category ID or slug
        });
        setDonations(donationsResponse.data);

        // Fetch merchandise products
        const merchandiseResponse = await wooCommerceApi.get('/products/', {
          params: { category: '16' }, // Replace with merchandise category ID or slug
        });
        setMerchandise(merchandiseResponse.data);

        // Fetch other donations products
        const otherDonationsResponse = await wooCommerceApi.get('/products/', {
          params: { category: '18' }, // Replace with other donations category ID or slug
        });
        setOtherDonations(otherDonationsResponse.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const renderProductList = (products, title) => (
    <div className="product-section">
      <h2>{title}</h2>
      <div className='products-cont'>
      {products.length === 0 ? (
        <p>No products available in this category.</p>
      ) : (
        <ul className="cart-product-list">
          {products.map((product) => (
            <li key={product.id}>
              {product.images && product.images.length > 0 && (
                <img
                  src={product.images[0].src}
                  alt={product.images[0].alt || product.name}
                />
              )}
              <div className='name-price'>
                <h3>{product.name}</h3>
              <p id='price'>Price: ${(product.prices.price / 100).toFixed(2)}</p>
              </div>
              
              <p>{product.description}</p>
              <button
                className="secondary-btn"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </li>
          ))}
        </ul>
      )}
      </div>
    </div>
  );

  return (
    <div className="cart-cont">
      {isLoading ? (
        <p>Loading products...</p>
      ) : (
        <>
        {renderProductList(merchandise, 'Merchandise')}
          {renderProductList(donations, 'Donations')}
          {renderProductList(otherDonations, 'Other Donations')}
        </>
      )}
    </div>
  );
};

export default ProductList;
