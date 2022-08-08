import React from 'react';
import { string } from 'prop-types';
import classNames from 'classnames';

import { FormattedMessage } from '../../../util/reactIntl';
import { NamedLink } from '../../../components';

import css from './SectionAlfie.module.css';

const SectionAlfie = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.heroContent}>
        <h1 className={css.heroMainTitle}>
          <FormattedMessage id="SectionAlfie.title" />
        </h1>
        <h2 className={css.heroSubTitle}>
          <FormattedMessage id="SectionAlfie.subTitle" />
        </h2>
        <NamedLink className={css.heroButton} name="ProfilePage" params={{ id: '62ee3bea-22a9-486e-a012-63fe1a046b98' }} >         
         <FormattedMessage id="SectionHero.browseButton" />
        </NamedLink>
      </div>
    </div>
  );
};

SectionAlfie.defaultProps = { rootClassName: null, className: null };

SectionAlfie.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionAlfie;
