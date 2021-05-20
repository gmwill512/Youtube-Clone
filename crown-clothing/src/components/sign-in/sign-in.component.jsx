import React from 'react';
import './sign-in.component.style.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button-component.jsx';
import { signinWithGoogle } from '../../firebase/firebase.util.js';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ email: '', password: '' });
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account.</h2>
        <span>Sign in with your email</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="email"
            handleChange={this.handleChange}
            value={this.state.email}
            required
          />
          <FormInput
            name="password"
            type="password"
            label="password"
            value={this.state.password}
            required
            handleChange={this.handleChange}
          />
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={signinWithGoogle}>
            Sign In With Google
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
