import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';
import RecipePage from './pages/RecipePage';
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/create-account" component={CreateAccountPage} />
          <Route path="/recipe/:id" component={RecipePage} />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
