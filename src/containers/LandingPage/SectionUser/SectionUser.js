import React from 'react';
import { string } from 'prop-types';
import classNames from 'classnames';

import { FormattedMessage } from '../../../util/reactIntl';
import { NamedLink } from '../../../components';

import css from './SectionUser.module.css';

const SectionUser = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.heroContent}>
        <h1 className={css.heroMainTitle}>
          <FormattedMessage id="User of the week" />
        </h1>
        <h2 className={css.heroSubTitle}>
          <FormattedMessage id="Meet Juha Lahtinen" />
        </h2>
        <NamedLink className={css.heroButton} name="ProfilePage" params={{ id: '6283811e-b4a6-4cf8-babf-2e457396db51' }} >
          <FormattedMessage id="View" />
        </NamedLink>
      </div>
    </div>
  );
};

SectionUser.defaultProps = { rootClassName: null, className: null };

SectionUser.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionUser;
