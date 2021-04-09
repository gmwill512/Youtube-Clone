import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchPage from './SearchPage.js';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search/:searchTerm">
            <Header />
            <div className="app_page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <Header />
            <div id="app_page">
              <Sidebar />
              <Main />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
