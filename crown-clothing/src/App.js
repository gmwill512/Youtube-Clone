import './App.css';
import HomepageComponents from './page-components/homepage.components.jsx';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './page-components/shop/shop.component';
import HeaderComponent from './components/header-component/header-component.jsx';
import SignInSignUp from './page-components/sign-in.sign-up/sign-in.sign-up.jsx';
import { auth } from './firebase/firebase.util';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <HeaderComponent />
        <Switch>
          <Route exact path="/" component={HomepageComponents} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
