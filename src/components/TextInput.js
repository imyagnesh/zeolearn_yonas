import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { getIn } from 'formik';

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const TextInput = ({ field, form: { touched, errors }, ...props }) => {
  const classes = useStyles();
  const error = getIn(errors, field.name);
  const touch = getIn(touched, field.name);
  const errorMessage = touch && error ? error : null;
  return (
    <TextField
      {...field}
      className={classes.textField}
      margin="normal"
      error={!!errorMessage}
      helperText={errorMessage}
      {...props}
    />
  );
};

TextInput.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  form: PropTypes.shape({
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
  }).isRequired,
};

export default TextInput;
