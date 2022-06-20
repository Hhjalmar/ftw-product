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
          <FormattedMessage id="Featured product from our community" />
        </h1>
        <h2 className={css.heroSubTitle}>
          <FormattedMessage id= "Limestone" />
        </h2>
        <NamedLink className={css.heroButton} name="ProfilePage" params={{ id: '618a30d5-e9be-4e02-b27f-3d2af2d210a1'}} >
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
