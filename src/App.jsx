import React from 'react';
import './index.css';
import LoginForm from './components/LoginForm';
import Header from './components/Header';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import { Route, Switch } from 'react-router-dom';
import AuthContextProvider from './contexts/AuthContext';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Header />
        <Switch>
          <Route exact path="/" component={FriendsList} />
          <Route path="/login" component={LoginForm} />
          <Route path="/friends/add" component={AddFriend} />
          <Route path="/friends" component={FriendsList} />
        </Switch>
      </AuthContextProvider>
    </div>
  );
}

export default App;
