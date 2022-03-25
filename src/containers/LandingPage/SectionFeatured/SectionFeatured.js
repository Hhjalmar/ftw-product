import React from 'react';
import { string } from 'prop-types';
import classNames from 'classnames';

import { FormattedMessage } from '../../../util/reactIntl';
import { NamedLink } from '../../../components';

import css from './SectionFeatured.module.css';

const SectionFeatured = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.heroContent}>
        <h1 className={css.heroMainTitle}>
          <FormattedMessage id="Artist of the week" />
        </h1>
        <h2 className={css.heroSubTitle}>
          <FormattedMessage id="Meet Just Peachy" />
        </h2>
        <NamedLink className={css.heroButton} name="ProfilePage" params={{ id: '619f6800-a010-471b-afdf-bf5f7acfafa7' }} >
          <FormattedMessage id="View" />
        </NamedLink>
      </div>
    </div>
  );
};

SectionFeatured.defaultProps = { rootClassName: null, className: null };

SectionFeatured.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionFeatured;
