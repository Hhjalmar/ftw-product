import React from 'react';
import { string } from 'prop-types';
import classNames from 'classnames';

import { FormattedMessage } from '../../../util/reactIntl';
import { NamedLink } from '../../../components';

import css from './SectionUsed.module.css';

const SectionUsed = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.heroContent}>
        <h1 className={css.heroMainTitle}>
          <FormattedMessage id="Sell Your Seconhand furniture" />
        </h1>
        <h2 className={css.heroSubTitle}>
          <FormattedMessage id="Love a vintage items with a story? So do we! Let us help you turn your vintage finds into cash!" />
        </h2>
        <NamedLink name="ReusedPage" className={css.heroButton}>
          <FormattedMessage id="Learn More" />
        </NamedLink>
      </div>
    </div>
  );
};

SectionUsed.defaultProps = { rootClassName: null, className: null };

SectionUsed.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionUsed;