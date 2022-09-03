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
import image from './Copy of Copy of Copy of Copy of Copy of Copy of Copy of Copy of Copy of Copy of Copy of Copy of Copy of Copy of Copy of Copy of Copy of THE CURSED PHARAO.png';
import image1 from './Screenshot 2022-08-09 at 17.58.30.png';


import css from './HowItWorksPage.module.css';

const HowItWorksPage = () => {
  // prettier-ignore
  return (
    <StaticPage>
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.mainWrapper}>
          <h1>How does it all work?</h1>

          

          <img className={css.coverImage} src={image} alt="Copy of Copy of Copy of Copy of Copy of Copy of Copy of Copy of Copy of Copy of Copy of Copy of Copy of Copy of Copy of Copy of Copy of THE CURSED PHARAO.png" />
          <div>
          
            <h1>Basics as Seller</h1>

            <h3>No commitment</h3>
            <p>By creating an account with us, you do not commit to anything. Delete your account and listings anytime you want if you feel like it.</p>
          

            <h3>You are in Charge</h3>
            <p>No purchase needs to be accepted automatically, accept or reject any purchase as you see fit.</p>
          
            <h3>Keep it in the chat</h3>
            <p>Keep it all in the chat and don't accept requests to phone or email the buyer. We will and can only help you if you keep the communication with the buyer in the chat.</p>
          
            <h3>Sell, track it, and we got you</h3>
            <p>When someone buys your items, you are expected to send the item with tracking code via postage. Make sure you send this code to buyer after shipping.Doing this we can help you if something happens.</p>
          
            <h3>No weird fees, no nonsense</h3>
            <p>We charge only 11% on sold work, no other fees exist and ever will exist.</p>

            <h3>What kind pictures I should take of my items?</h3>
            <p>Clear photos that includes only the item that you are selling,  against white background  - poor quality listing can be taken down from our site and you might be asked to list them item again with better photos. You can have other kinds of photos but the first image people see should be clear, see the example below.</p>
            <img className={css.coverImage} src={image1} alt="Screenshot 2022-08-09 at 17.58.30.png" align="center" width="400" height="500"  />

            <p>A good rule of thumb is to make sure that the photo is brightly lit and you can see only the item you are selling.</p>
            

            <h3>Apply to be a seller!</h3>
            <p>Our mission is to bring the most unique items to people. Are you a brand or a designer looking to list your items? List your items today to apply to be a seller!</p>
          

          

            <h1>Basics as Buyer</h1>

            <h3>Buy beautiful original items</h3>
            <p>Purchase everything from rugs to paintings from our community.</p>



            <h3>Keep it the chat</h3>
            <p>When purchasing an item, keep all the communication in the chat provided by us. This way we can help you if any problems arise.</p>


            <h3>We got you covered</h3>
            <p>We make sure you get your items in time and your money back if something happens or the item isn't as described. If you have any issues at all, reach out to us at hello(at)himassa.com</p>

            <h3>How does the shipping work</h3>
            <p>The seller is responsbile on the shipping. We make sure that the items are received by the buyer, you can also follow the shipment in real time through the tracking number that the seller provides.
            </p>

          

         

            <h3>Refer a friend and earn!</h3>
            <p>If you refer us to your friend and they make a purchase, we will pay you % of their purchase. This model is progressive, the bigger the purchase - the more you earn. Just ask them to write: "referred by (your name)" when making a purchase.</p>


          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default HowItWorksPage;