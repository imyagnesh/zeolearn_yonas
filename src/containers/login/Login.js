import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { Formik, Field } from 'formik';
import TextInput from '../../components/TextInput';
import Checkbox from '../../components/Checkbox';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(3, 2),
    width: 300,
  },
}));

const Login = ({ saveUser }) => {
  const classes = useStyles();

  const [data, setData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const username = await localStorage.getItem('@zeloearn:username');
        const password = await localStorage.getItem('@zeloearn:password');
        console.log(username);
        console.log(password);
        setData({ username: username || '', password: password || '' });
      } catch (error) {
        console.log(error);
      }
    };
    loadData();
  }, []);

  const submit = values => {
    if (values.rememberMe) {
      localStorage.setItem('@zeloearn:username', values.username);
      localStorage.setItem('@zeloearn:password', values.password);
    } else {
      localStorage.removeItem('@zeloearn:username');
      localStorage.removeItem('@zeloearn:password');
    }
    saveUser(values);
  };

  console.log(data);

  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}
    >
      <Paper elevation={3} className={classes.paper}>
        <Formik
          initialValues={{
            username: '',
            password: '',
            rememberMe: false,
            ...data,
          }}
          enableReinitialize
          onSubmit={submit}
          validate={values => {
            const errors = {};
            if (!values.username) {
              errors.username = 'required';
            }
            if (!values.password) {
              errors.password = 'required';
            }
            return errors;
          }}
        >
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <h1>Login Page</h1>
                <Field name="username" label="Username" component={TextInput} />
                <Field name="password" type="password" label="Password" component={TextInput} />
                <Field name="rememberMe" label="Remember Me" component={Checkbox} />
                <Button type="submit" variant="contained" color="primary">
                  Login
                </Button>
              </div>
            </form>
          )}
        </Formik>
      </Paper>
    </div>
  );
};

Login.propTypes = {
  saveUser: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  saveUser: user => dispatch({ type: 'SAVE_USER', payload: user }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
