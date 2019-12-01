import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

const Login = () => {
  const classes = useStyles();

  const submit = values => {
    console.log(values);
  };

  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}
    >
      <Paper elevation={3} className={classes.paper}>
        <Formik
          initialValues={{
            username: '',
            password: '',
          }}
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
export default Login;
