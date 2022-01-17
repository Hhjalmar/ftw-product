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
import image from './image.1.png';

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

          

          <img className={css.coverImage} src={image} alt="image.1.png" />
          <div>
          
            <h1>Basics as Seller</h1>

            <h3>No commitment</h3>
            <p>By creating an account with us, you do not commmit to anything. Delete your account and listings anytime you want if you feel like it.</p>
          

            <h3>You are in Charge</h3>
            <p>No purchase needs to be accepted automatically, accept or reject any purchase as you see fit.</p>
          
            <h3>Keep it in the chat</h3>
            <p>Keep it all in the chat and don't accept requests to phone or email the buyer. We will and can only help you if you keep the communication with the buyer in the chat.</p>
          
            <h3>Sell, track it</h3>
            <p>When someone buys your items, you are expected to send the item with tracking code via postage. Make sure you send this code to buyer after shipping.</p>
          
            <h3>No weird fees, no nonsense</h3>
            <p>When charge only 11% on sold work, no other fees exist and ever will exist.</p>
          

            <h1>Basics as Buyer</h1>


            <h3>Keep it the chat</h3>
            <p>When purchasing an item, keep all the commmunication in the chat provided by us. This way we can help you if any problemms arise.</p>


            <h3>Ask for tracking</h3>
            <p>Sellers are obliged to provide tracking info to you. If a buyer fails to provide this, reach out to us at hello(at)himassa.com</p>

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