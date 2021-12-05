import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './TermsOfService.module.css';

const TermsOfService = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);

  // prettier-ignore
  return (
    <div className={classes}>
      <p className={css.lastUpdated}>Last updated: November, 4th 2021</p>

      <p>
        Thank you for using Himassa! 
      </p>

      <h2>Rights of Content</h2>
      <p>
      The users themselves retain the right to all text, pictures and other content that they create in the service. The users allow others to utilize the content in accordance with the nature of the service and furthermore allow the service provider to file information and data and make changes that are necessary for the service or the study, however other rights are not transferred from the users, unless specifically otherwise agreed. The responsibility of the content lies with the user, who has produced it to the service. The service provider has the right to remove any material when it deems it necessary.
      </p>

      <h2>Disclaimer</h2>
      <p>
      The users are themselves responsible for their actions in the service and they should estimate the reliability of other users before dealing with them. The service provider can under no circumstances be liable for damage that is caused to the user. The user may not store any information or data in the service, and expect it to remain there.
      </p>

      <h2>The Removal of a User</h2>
      <p>
      The service provider has the right to remove any users from Himassa and terminate their right of use of the service without any specific reason and without being liable for compensation.
      </p>

      <h2>Payments</h2>
      <p>
      Himassa does not support payments outside the platform. Asking a buyer to pay via banktransfer or other means will immediately result to a ban. This will result you losing all your listings and you won't be able to access your account anymore.
      </p>

      <h2>Applicable Jurisdiction</h2>
      <p>
      The jurisdiction that is applicable in this service and these terms of use is that of Finland, unless something else is required by binding law.
      </p>
    </div>
  );
};

TermsOfService.defaultProps = {
  rootClassName: null,
  className: null,
};

const { string } = PropTypes;

TermsOfService.propTypes = {
  rootClassName: string,
  className: string,
};

export default TermsOfService;
