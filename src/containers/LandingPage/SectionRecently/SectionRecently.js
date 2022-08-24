import React, { Component } from 'react';
import { string } from 'prop-types';
import classNames from 'classnames';

import { FormattedMessage } from '../../../util/reactIntl';
import { lazyLoadWithDimensions } from '../../../util/contextHelpers';

import { NamedLink } from '../../../components';

import css from './SectionRecently.module.css';

// Update images by saving images to src/LandingPage/SeactionFilteredSearches/images directory.
// If those images have been saved with the same name, no need to make changes to these imports.
import imageForFilter1 from './images/Screenshot 2022-08-08 at 12.29.11.png';
import imageForFilter2 from './images/Screenshot 2022-08-08 at 12.35.26.png';
import imageForFilter3 from './images/Screenshot 2022-08-08 at 12.36.58.png';

// Thumbnail image for the search "card"
class ThumbnailImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
// Load the image only if it's close to viewport (user has scrolled the page enough).
const LazyImage = lazyLoadWithDimensions(ThumbnailImage);

// Create a "card" that contains a link to filtered search on SearchPage.
const FilterLink = props => {
  const { name, image, link } = props;
  const url = typeof window !== 'undefined' ? new window.URL(link) : new global.URL(link);
  const searchQuery = url.search;
  const nameText = <span className={css.searchName}>{name}</span>;
  return (
    <NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.searchLink}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.searchImage} />
        </div>
      </div>
     
    </NamedLink>
  );
};

// Component that shows full-width section on LandingPage.
// Inside it shows 3 "cards" that link to SearchPage with specific filters applied.
const SectionRecently = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);

  // FilterLink props:
  // - "name" is a string that defines what kind of search the link is going to make
  // - "image" is imported from images directory and you can update it by changing the file
  // - "link" should be copy-pasted URL from search page.
  //    The domain doesn't matter, but search query does. (I.e. "?pub_brand=nike")
  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionRecently.title" />
      </div>
      <div className={css.filteredSearches}>
        <FilterLink
          name="Art"
          image={imageForFilter1}
          link="http://localhost:3000/l/kibako-ack-106/62ede9d0-9411-47e6-945d-c9bc8c42d9a3"
        />
        <FilterLink
          name="Rugs"
          image={imageForFilter2}
          link="https://localhost:3000/l/toy-stool-wos-1722/62ecc2d1-b5dd-4974-9bca-8d065bb5f277"
        />
        <FilterLink
          name="Furniture"
          image={imageForFilter3}
          link="http://localhost:3000/l/forms-dining-chair-nbc-452/62edfc86-6f4e-4a1c-b425-abb2b68fd991"
        />
      </div>
    </div>
  );
};

SectionRecently.defaultProps = { rootClassName: null, className: null };

SectionRecently.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionRecently;