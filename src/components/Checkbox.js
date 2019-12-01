/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import PropTypes from 'prop-types';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MUICheckbox from '@material-ui/core/Checkbox';

const Checkbox = ({ field, form: { setFieldValue }, ...props }) => (
  <FormControlLabel
    control={
      <MUICheckbox
        checked={!!field.value}
        onChange={event => setFieldValue(field.name, event.target.checked)}
        value={field.name}
        color="primary"
      />
    }
    {...props}
  />
);

Checkbox.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
  }).isRequired,
  form: PropTypes.shape({
    setFieldValue: PropTypes.func.isRequired,
  }).isRequired,
};

export default Checkbox;
