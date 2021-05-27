import React, { useState, useEffect, useContext } from 'react';
import './sign-up.css';
import { Button, Input } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import { getModalStyle, useStyles } from '../modal.js';
import { auth } from '../../firebase';
import { UserContext } from '../../App';

function SignUpSignIn() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const classes = useStyles();
  const [user, setUser] = useState(null);
  const [openSignIn, setOpenSignIn] = useState(false);
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const userContext = useContext(UserContext);

  //Listening for is the user is authorized and then asked to log in. Then saves the username
  // as a display name
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // console.log(authUser);
        setUser(authUser);
        userContext.saveUser({ ...authUser });
      } else {
        setUser(null);
      }
    });
    return () => {
      unsubscribe(); //performs a clean up. cleans up duplicates and then refires.
    };
  }, [user, userContext]); // dependencies for use effect

  // Opens Sign Up modal
  const showSignUpModal = () => {
    setOpen(true);
  };
  // Set Sign up email and password and closes modal
  const signUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        return authUser.user.updateProfile({
          displayName: username,
        });
      })
      .catch((error) => alert(error.message));
    setOpen(false);
  };

  // Allows user to sign in and closes modal
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));

    setOpenSignIn(false);
  };

  // Renders different buttons depending on if User is signed in, already registered or new user
  return (
    <div className="signUpSignIn">
      {user ? (
        <Button onClick={() => auth.signOut()}>Log Out</Button>
      ) : (
        <div className="appLoginContainer">
          <Button type="button" onClick={showSignUpModal}>
            Sign Up
          </Button>
          <Button type="button" onClick={() => setOpenSignIn(true)}>
            Sign In
          </Button>
        </div>
      )}
      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={modalStyle} className={classes.paper}>
          <center>
            <img
              className="headerImage"
              src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
              height="30px;"
              alt=""
            />
          </center>
          <form className="appSignUp">
            <div className="signUpForm">
              <Input
                placeholder="Username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <Input
                placeholder="Email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <center>
              <Button type="submit" onClick={signUp}>
                Sign Up
              </Button>
            </center>
          </form>
        </div>
      </Modal>
      <Modal open={openSignIn} onClose={() => setOpenSignIn(false)}>
        <div style={modalStyle} className={classes.paper}>
          <center>
            <img
              className="headerImage"
              src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
              height="30px;"
              alt=""
            />
          </center>
          <form className="appSignUp">
            <div className="signUpForm">
              <Input
                placeholder="Email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <center>
              <Button type="submit" onClick={signIn}>
                Sign In
              </Button>
            </center>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default SignUpSignIn;
