
import React from 'react';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
} from '../../components';

import StaticPage from '../../containers/StaticPage/StaticPage';
import TopbarContainer from '../../containers/TopbarContainer/TopbarContainer';
import image from './Screenshot 2022-08-09 at 17.58.30.png';


import css from './FAQPage.module.css';

const FAQPage = () => {
  // prettier-ignore
  return (
    <StaticPage>
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.mainWrapper}>
          <h1>Frequently Asked Questions</h1>

          <div>
            <h3>How do I start Selling?</h3>
            <p>After signing up and verifying your account through the email we send you, fill in your profile information using a photo and add in your payment details, after this you can list your items and if they are approved - you can start selling.</p>
          
            <h3>What are your fees?</h3>
            <p>We charge 11% on purchases, to start selling with us is free!</p>

            <h3>How does the shipping work?</h3>
            <p>The seller is responsbile on the shipping. We make sure that the items are received by the buyer, you can also follow the shipment in real time through the tracking number that the seller provides.</p>
            
            <h3>What kind pictures I should take of my items?</h3>
            <p>Clear photos that includes only the item that you are selling,  against white background  - poor quality listing can be taken down from our site and you might be asked to list them item again with better photos. You can have other kinds of photos but the first image people see should be clear, see the example below.</p>
            <img className={css.coverImage} src={image} alt="Screenshot 2022-08-09 at 17.58.30.png" align="center" width="400" height="500"  />

            <p>A good rule of thumb is to make sure that the photo is brightly lit and you can see only the item you are selling.</p>
            
           
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default FAQPage;