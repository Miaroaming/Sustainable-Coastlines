import React from 'react'
import ProductList from '../components/ProductList'

const Shop = () => {
  return (
    <>
    <div className='header'>
        <div className='header-text'>
            <h1>Our Shop</h1>
            <h3>Big or small, your donation helps to protect the moana we all love.</h3>
        </div>

        <img id='shop-header-img' src="/images/shop-header.jpg" alt="nz-beach-volunteers" />
    </div>

    
    <ProductList/>
  
  <div className='centering-shop'>
        <div className='info-section'>
            <img src="/images/table-post.jpg" alt="volunteers-on-beach" />
            <div className='info-text'>
                <h2>Charity Details</h2>
                <p>
                The Sustainable Coastlines Charitable Trust is a registered charitable entity in terms of the Charities Act 2005. Registration #CC46615.
                <br /><br />
                Because we are a registered New Zealand charity, donations are officially eligible for tax credit. See our Charities Commission Certificate of Registration here. For every donation we will send a tax receipt automatically to the email address provided.
                <br /><br />
                The support from our generous sponsors and donors is crucial to the ongoing success of our organisation. Without it the achievements we’ve already made would not have been possible. Administrative costs are kept to a minimum so that the maximum percentage of your donation goes towards our projects.
                So please dig deep, give generously, and help us to create projects to sustain and protect our coastlines. Your support is much appreciated.
                </p>
            </div>
        </div>
 </div>

      <div className='bank-cont'>
      <div className='bank-section'>
          <div className='bank-info'>
            <h2>International Bank Details</h2>
            <p>Sustainable Coastlines Charitable Trust
              <br />Account: 02-1257-0062383-000
              <br />SWIFT/BIC: BKNZNZ22
              <br />Address: 37-55 Madden Street, Auckland Central, Auckland, 1010
              <br />Bank Address: Bank of New Zealand, Wellington, New Zealand
              <br />More details for sending money to New Zealand can be found here.
              </p>
          </div>
          <div className='bank-info'>
            <h2>NZ Bank Transfers</h2>
            <p>Sustainable Coastlines Charitable Trust
              <br />Bank of New Zealand, Wellington, New Zealand
              <br />Account: 02-1257-0062383-000
              <br />Reference: Last name</p>
          </div>
      </div>
  </div>
        
  
    

  
    
    </>
  )
}

export default Shop
