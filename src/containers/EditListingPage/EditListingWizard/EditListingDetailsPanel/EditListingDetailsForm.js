import React from 'react';
import { arrayOf, bool, func, shape, string } from 'prop-types';
import { compose } from 'redux';
import { Form as FinalForm } from 'react-final-form';
import classNames from 'classnames';

// Import configs and util modules
import config from '../../../../config';
import { intlShape, injectIntl, FormattedMessage } from '../../../../util/reactIntl';
import { propTypes } from '../../../../util/types';
import { maxLength, required, composeValidators } from '../../../../util/validators';
import { findConfigForSelectFilter } from '../../../../util/search';

// Import shared components
import { Form, Button, FieldTextInput } from '../../../../components';
// Import modules from this directory
import CustomFieldEnum from '../CustomFieldEnum';
import css from './EditListingDetailsForm.module.css';
import { noConflict } from 'lodash';


const TITLE_MAX_LENGTH = 60;

const EditListingDetailsFormComponent = props => (
  <FinalForm
    {...props}
    render={formRenderProps => {
      const {
        autoFocus,
        className,
        disabled,
        ready,
        handleSubmit,
        intl,
        invalid,
        pristine,
        saveActionMsg,
        updated,
        updateInProgress,
        fetchErrors,
        filterConfig,
      } = formRenderProps;

      const titleMessage = intl.formatMessage({ id: 'EditListingDetailsForm.title' });
      const titlePlaceholderMessage = intl.formatMessage({
        id: 'EditListingDetailsForm.titlePlaceholder',
      });
      const titleRequiredMessage = intl.formatMessage({
        id: 'EditListingDetailsForm.titleRequired',
      });
      const maxLengthMessage = intl.formatMessage(
        { id: 'EditListingDetailsForm.maxLength' },
        {
          maxLength: TITLE_MAX_LENGTH,
        }
      );

      const descriptionMessage = intl.formatMessage({
        id: 'EditListingDetailsForm.description',
      });
      const descriptionPlaceholderMessage = intl.formatMessage({
        id: 'EditListingDetailsForm.descriptionPlaceholder',
      });
      const maxLength60Message = maxLength(maxLengthMessage, TITLE_MAX_LENGTH);
      const descriptionRequiredMessage = intl.formatMessage({
        id: 'EditListingDetailsForm.descriptionRequired',
      });
    
      const { updateListingError, createListingDraftError, showListingsError } = fetchErrors || {};
      const errorMessageUpdateListing = updateListingError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingDetailsForm.updateFailed" />
        </p>
      ) : null;

      // This error happens only on first tab (of EditListingWizard)
      const errorMessageCreateListingDraft = createListingDraftError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingDetailsForm.createListingDraftError" />
        </p>
      ) : null;

      const errorMessageShowListing = showListingsError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingDetailsForm.showListingFailed" />
        </p>
      ) : null;

      const classes = classNames(css.root, className);
      const submitReady = (updated && pristine) || ready;
      const submitInProgress = updateInProgress;
      const submitDisabled = invalid || disabled || submitInProgress;

      const categoryConfig = findConfigForSelectFilter('category', filterConfig);
      const categorySchemaType = categoryConfig.schemaType;
      const categories = categoryConfig.options ? categoryConfig.options : [];
      const categoryLabel = intl.formatMessage({
        id: 'EditListingDetailsForm.categoryLabel',
      });
      const categoryPlaceholder = intl.formatMessage({
        id: 'EditListingDetailsForm.categoryPlaceholder',
      });

      const categoryRequired = required(
        intl.formatMessage({
          id: 'EditListingDetailsForm.categoryRequired',
        })
      );



      const sizeConfig = findConfigForSelectFilter('size', filterConfig);
      const sizeSchemaType = sizeConfig ? sizeConfig.schemaType : null;
      const sizes = sizeConfig && sizeConfig.options ? sizeConfig.options : [];
      const sizeLabel = intl.formatMessage({
        id: 'EditListingDetailsForm.sizeLabel',
      });
      const sizePlaceholder = intl.formatMessage({
        id: 'EditListingDetailsForm.sizePlaceholder',
      });

      const sizeRequired = required(
        intl.formatMessage({
          id: 'EditListingDetailsForm.sizeRequired',
        })
      );

      const brandConfig = findConfigForSelectFilter('brand', filterConfig);
      const brandSchemaType = brandConfig ? brandConfig.schemaType : null;
      const brands = brandConfig && brandConfig.options ? brandConfig.options : [];
      const brandLabel = intl.formatMessage({
        id: 'EditListingDetailsForm.brandLabel',
      });
      const brandPlaceholder = intl.formatMessage({
        id: 'EditListingDetailsForm.brandPlaceholder',
      });

      const brandRequired = required(
        intl.formatMessage({
          id: 'EditListingDetailsForm.brandRequired',
        })
      );



      const furnitureConfig = findConfigForSelectFilter('furniture', filterConfig);
      const furnitureSchemaType = furnitureConfig ? furnitureConfig.schemaType : null;
      const furniture = furnitureConfig && furnitureConfig.options ? furnitureConfig.options : [];
      const furnitureLabel = intl.formatMessage({
        id: 'EditListingDetailsForm.furnitureLabel',
      });
      const furniturePlaceholder = intl.formatMessage({
        id: 'EditListingDetailsForm.furniturePlaceholder',
      });



      const jewelryConfig = findConfigForSelectFilter('jewelry', filterConfig);
      const jewelrySchemaType = jewelryConfig ? jewelryConfig.schemaType : null;
      const jewelry = jewelryConfig && jewelryConfig.options ? jewelryConfig.options : [];
      const jewelryLabel = intl.formatMessage({
        id: 'EditListingDetailsForm.jewelryLabel',
      });
      const jewelryPlaceholder = intl.formatMessage({
        id: 'EditListingDetailsForm.jewelryPlaceholder',
      });



      const fashionConfig = findConfigForSelectFilter('fashion', filterConfig);
      const fashionSchemaType = fashionConfig ? fashionConfig.schemaType : null;
      const fashion = fashionConfig && fashionConfig.options ? fashionConfig.options : [];
      const fashionLabel = intl.formatMessage({
        id: 'EditListingDetailsForm.fashionLabel',
      });
      const fashionPlaceholder = intl.formatMessage({
        id: 'EditListingDetailsForm.fashionPlaceholder',
      });



      const artConfig = findConfigForSelectFilter('art', filterConfig);
      const artSchemaType = artConfig ? artConfig.schemaType : null;
      const art = artConfig && artConfig.options ? artConfig.options : [];
      const artLabel = intl.formatMessage({
        id: 'EditListingDetailsForm.artLabel',
      });
      const artPlaceholder = intl.formatMessage({
        id: 'EditListingDetailsForm.artPlaceholder',
      });


      const decorConfig = findConfigForSelectFilter('decor', filterConfig);
      const decorSchemaType = decorConfig ? decorConfig.schemaType : null;
      const decor = decorConfig && decorConfig.options ? decorConfig.options : [];
      const decorLabel = intl.formatMessage({
        id: 'EditListingDetailsForm.decorLabel',
      });
      const decorPlaceholder = intl.formatMessage({
        id: 'EditListingDetailsForm.decorPlaceholder',
      });








      return (
        <Form className={classes} onSubmit={handleSubmit}>
          {errorMessageCreateListingDraft}
          {errorMessageUpdateListing}
          {errorMessageShowListing}
          <FieldTextInput
            id="title"
            name="title"
            className={css.title}
            type="text"
            label={titleMessage}
            placeholder={titlePlaceholderMessage}
            maxLength={TITLE_MAX_LENGTH}
            validate={composeValidators(required(titleRequiredMessage), maxLength60Message)}
            autoFocus={autoFocus}
          />
          <FieldTextInput
            id="description"
            name="description"
            className={css.description}
            type="textarea"
            label={descriptionMessage}
            placeholder={descriptionPlaceholderMessage}
            validate={composeValidators(required(descriptionRequiredMessage))}
          />

<CustomFieldEnum
            id="brand"
            name="brand"
            options={brands}
            label={brandLabel}
            placeholder={brandPlaceholder}
            validate={brandRequired}

            schemaType={brandSchemaType}
          />
      <CustomFieldEnum
            id="size"
            name="size"
            options={sizes}
            label={sizeLabel}
            placeholder={sizePlaceholder}
            schemaType={sizeSchemaType}
            validate={sizeRequired}

          />
          <CustomFieldEnum
            id="category"
            name="category"
            options={categories}
            label={categoryLabel}
            placeholder={categoryPlaceholder}
            schemaType={categorySchemaType}
          />
    <CustomFieldEnum
            id="art"
            name="art"
            options={art}
            label={artLabel}
            placeholder={artPlaceholder}
            schemaType={artSchemaType}
          />
    <CustomFieldEnum
            id="decor"
            name="decor"
            options={decor}
            label={decorLabel}
            placeholder={decorPlaceholder}
            schemaType={decorSchemaType}
          />

         <CustomFieldEnum
            id="jewelry"
            name="jewelry"
            options={jewelry}
            label={jewelryLabel}
            placeholder={jewelryPlaceholder}
            schemaType={jewelrySchemaType}
          />

    <CustomFieldEnum
            id="fashion"
            name="fashion"
            options={fashion}
            label={fashionLabel}
            placeholder={fashionPlaceholder}
            schemaType={fashionSchemaType}
          />

         <CustomFieldEnum
            id="furniture"
            name="furniture"
            options={furniture}
            label={furnitureLabel}
            placeholder={furniturePlaceholder}
            schemaType={furnitureSchemaType}
          />

          <Button
            className={css.submitButton}
            type="submit"
            inProgress={submitInProgress}
            disabled={submitDisabled}
            ready={submitReady}
          >
            {saveActionMsg}
          </Button>
        </Form>
      );
    }}
  />
);

EditListingDetailsFormComponent.defaultProps = {
  className: null,
  fetchErrors: null,
  filterConfig: config.custom.filters,
};

EditListingDetailsFormComponent.propTypes = {
  className: string,
  intl: intlShape.isRequired,
  onSubmit: func.isRequired,
  saveActionMsg: string.isRequired,
  disabled: bool.isRequired,
  ready: bool.isRequired,
  updated: bool.isRequired,
  updateInProgress: bool.isRequired,
  fetchErrors: shape({
    createListingDraftError: propTypes.error,
    showListingsError: propTypes.error,
    updateListingError: propTypes.error,
  }),
  filterConfig: propTypes.filterConfig,
};

export default compose(injectIntl)(EditListingDetailsFormComponent);
