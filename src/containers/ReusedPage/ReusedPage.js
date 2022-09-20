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


import image from './Copy of Copy of Copy of Copy of Order easily from home.png';


import css from './ReusedPage.module.css';

function sendEmail() 
{
    window.location = "mailto:hello@himassa.com";
}

const ReusedPage = () => {
  // prettier-ignore
  return (
    <StaticPage>
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.mainWrapper}>


          <h1>Sell Your Furniture Through HIMASSA Repurposed Collection</h1>
          <img className={css.coverImage} src={image} alt="Copy of Copy of Copy of Copy of Order easily from home.png" />


          

          <div>
          
            <h1>Sounds cool! What it is?</h1>

            <h3>Take your design furniture, make it presentable, sell it through us and make a profit!</h3>
            <p></p>
          

            <h3>How can I sell my furniture through you?</h3>
            <p>You can start immediately for free by creating an account with us and listing your items with us, we will then analyse your listings and approve them if all looks good.</p>

            <h3>How do you set furniture value?</h3>
            <p>You can value it yourself, but our team of experts set a price for your furniture during the estimation process - if a change is needed. You cannot change the value when the item is accepted.</p>
          
            <h3>Awesome! How long does it usually take to sell and when will I get my money?</h3>
            <p>Sale time can take anywhere from few days to up to a month. You will get your cut as soon as paymeny is processed.</p>

            <h3>Sounds great! What are your fees?</h3>
            <p>Himassa takes only 11% processing fee which is set on top of the set price.</p>

            <h3>Buyer and seller protection?</h3>
            <p>Don't worry we have you covered.</p>

            <h3>I want to participate!</h3>
            <p>Awesome! Start up signing up and creating an account with us.</p>

            <h3>I don't live in Finland, can I still participate?</h3>
            <p>Yes! </p>





<h1><a href='mailto:hello@himassa.com?subject=Himassa Repurposed Collection&body=I am interested in Himassa Repurposed Collection!'>Register for free -></a></h1>


          
            

          </div>


   
        </LayoutWrapperMain>



        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default ReusedPage;