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
          <FormattedMessage id="Meet Joana Sinulid" />
        </h2>
        <NamedLink className={css.heroButton} name="ProfilePage" params={{ id: '61e59bf3-3d7e-43db-b5c6-3f228d11a1e9' }} >
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
