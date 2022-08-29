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

            <h3>We take your design furniture, make it presentanble, sell it and take cut from the profits while you net the rest.</h3>
            <p></p>
          

            <h3>How can I sell my furniture through you?</h3>
            <p>Send an email to hello@himassa.com titled "Himassa repurpose" with three pictures of you furniture with some info of your item. We will then go through the material, and if it's a fit - we will pick it up* (free of charge) sell it behalf of you.</p>

            <h3>How do you set furniture value?</h3>
            <p>Our team of experts set a price for your furniture during the estimation process, the final price is calculated when then item is brought to our offices.</p>
          
            <h3>Awesome! How long does it usually take to sell and when will I get my money?</h3>
            <p>Sale time can take anywhere from few days to up to a month. You will get your cut as soon as paymeny is processed.</p>

            <h3>Sounds great! What are your fees?</h3>
            <p>Himassa takes only 11% processing fee which is set on top of the set price.</p>

            <h3>I want to participate!</h3>
            <p>Awesome! Send information of your item to hello@himassa.com</p>

            <h3>I don't live in Finland, can I still participate?</h3>
            <p>Yes! But we won't then pick up the furniture for you, send information about your item  to hello@himassa.com</p>

            <p>*We only pick up furniture which is located in Finland at the moment! </p>





<h1><a href='mailto:hello@himassa.com?subject=Himassa Repurposed Collection&body=I am interested in Himassa Repurposed Collection!'>Participate</a></h1>


          
            

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