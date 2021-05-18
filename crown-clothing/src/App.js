import './App.css';
import HomepageComponents from './page-components/homepage.components.jsx';
import { Route, Switch } from 'react-router-dom';

const HatsPage = () => {
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomepageComponents} />
        <Route exact path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
