
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
          <h1>Return and Refund policy</h1>

          <div>
            <h3>What are your refund policy?</h3>
            <p>If you receive a faulty product or a product which does not correspond the pictures and description of the product on our site, you are titled to refund. Otherwise sellers state their refund policy themselves.</p>

            <p>If you have any issues with your product, please contact us at hello@himassa.com</p>

            <h3>Eligibility</h3>
<p>Here’s the criteria your purchase must meet to be eligible for a refund:</p>

<p>You must have purchased the item within 30 calendar days and you must contact us immediately after the product arrives.</p>
<p>The item must be unused, in its original condition. 
The item must be in its original packaging.
You must be able to provide a proof of purchase.
We must be able to find the case valid, this might differ from case to case.
</p>
<h3>What happens after the eligibility period?</h3>
<p>We can’t accept returns after 30 calendar days have passed. </p>


          
            
   
          
           
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