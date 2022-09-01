import React from 'react';

import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
} from '../../components';
import StaticPage from '../../containers/StaticPage/StaticPage';
import TopbarContainer from '../../containers/TopbarContainer/TopbarContainer';

import css from './AboutPage.module.css';
import image from './Copy of Copy of Copy of Copy of Copy of Copy of Copy of Copy of Copy of Copy of Copy of Copy of Copy of Copy of Copy of Copy of THE CURSED PHARAO.png';

const AboutPage = () => {
  const { siteInstagramPage, siteFacebookPage } = config;

  // prettier-ignore
  return (
    <StaticPage
      title="About Us"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'AboutPage',
        description: 'About Himassa',
        name: 'About page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>Your surroundings are a reflection of yourself.</h1>
          <img className={css.coverImage} src={image} alt="My first ice cream." />

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>"We've built Himassa because we wanted to connect designers, crafters and artists directy to you." Himassa is a Finnish platform and company but built for a global community.</p>
            </div>

            <div className={css.contentMain}>
              <h2>
                The world of art and design couldn't be more exciting! Whether you are a casual buyer or an experienced collector, you can find the right item for your home on Himassa and trust sellers that your new favorite item will be swiftly and safely sent to you or ready for pickup.
              </h2>

              <p>
                Buying online can be stressful: you can find many online websites where to buy art and design but most don't deliver the trust you can legitimately expect. With Himassa, we want to make sure you're transaction will go smoothly: from browsing and checking the stock, to making the order and payment, to the review of the sellers. And we hope you'll be so convinced that you'll soon start selling your art and design to make new buyers happy!
              </p>

              <h3 className={css.subtitle}>Do you have items to sell?</h3>

              <p>
                Himassa offers you a good way to sell your items online.  All items are given automatic advertising boost to reach the right buyers for your product.
              </p>

              <h3 id="contact" className={css.subtitle}>
                
              </h3>
              <p>
                Himassa is brought to you by the design lovers at{' '}
                <ExternalLink href="https://www.himassa.com">Vilmari Technologies Oy</ExternalLink>. 
              </p>
              <p>
                You can also checkout our{' '}
                <ExternalLink href={siteFacebookPage}>Facebook</ExternalLink> and{' '}
                <ExternalLink href={siteInstagramPage}>Instagram</ExternalLink>.
              
              </p>
            </div>
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default AboutPage;
