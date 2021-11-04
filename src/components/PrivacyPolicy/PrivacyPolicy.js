import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './PrivacyPolicy.module.css';

const PrivacyPolicy = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);

  // prettier-ignore
  return (
    <div className={classes}>
      <p className={css.lastUpdated}>Last updated: November 4th, 2021</p>

      <p>
        Thank you for using Himassa! 
      </p>

      <h2>Our Privacy Policy</h2>
      <p>
      Use of personal details (purpose of register)
Personal details are collected to make communication and use of service possible. Details can be used for communication between service providers and users and also for direct communication between users. Some personal details are visible on the profile page of the user, but those details are voluntary (except name).

The handling of personal details is not outsourced, but the register data is stored on a server that is rented from a third party company.

Information content of the register
The following information may be stored in the register:

Personal details: Name, email address, phone number, street address
Account details: username, password (stored in encrypted format)
The description text that the user may write about him/herself
The offers and requests the user has posted to the service
The given and received feedback and badges
Statistical data about service usage, e.g. number times the user has logged in
Regular sources of information
Personal details are given by the user on registration to the service or when using it later.

Regular handovers of the information
The information may be handed over for research purposes as described in the Terms of use that the user accepts before starting to use the service. The researchers may not publish any research results so that identifying information would be revealed or that any specific user could be detected.

Information considering users of a single Himassa community may be handed over to the client who has founded that community or to the community administrators appointed by that client.

Transfers of the information outside the EU and the European Economic Area
Information may be stored to a server that may be located inside or outside of the EU and the European Economic Area

Register protection principles
The information is stored on computers. The access to the information is restricted with passwords and physical access to the computers is restricted by the server hosting company.
      </p>
    </div>
  );
};

PrivacyPolicy.defaultProps = {
  rootClassName: null,
  className: null,
};

const { string } = PropTypes;

PrivacyPolicy.propTypes = {
  rootClassName: string,
  className: string,
};

export default PrivacyPolicy;
