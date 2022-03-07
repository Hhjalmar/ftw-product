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
          <FormattedMessage id="Meet Annette Schmucker" />
        </h2>
        <NamedLink className={css.heroButton} name="ProfilePage" params={{ id: '618a30d5-87b9-49d8-b0ec-878299f7205c' }} >
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
