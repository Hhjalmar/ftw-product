import React from 'react';
import { string } from 'prop-types';
import classNames from 'classnames';

import { FormattedMessage } from '../../../util/reactIntl';
import { NamedLink } from '../../../components';

import css from './SectionNew.module.css';

const SectionNew = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.heroContent}>
        <h1 className={css.heroMainTitle}>
          <FormattedMessage id="Sign Up Now" />
        </h1>
        <h2 className={css.heroSubTitle}>
          <FormattedMessage id="Sell your works to bigger audience and build a following" />
        </h2>
        <NamedLink name="SearchPage" className={css.heroButton}>
          <FormattedMessage id="Sign up" />
        </NamedLink>
      </div>
    </div>
  );
};

SectionNew.defaultProps = { rootClassName: null, className: null };

SectionNew.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionNew;
