import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';

const HatsPage = (props) => {
  console.log(props);
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
};

const TopicsList = (props) => {
  console.log(props);
  return (
    <div>
      <h1>TOPIC LIST PAGE</h1>
    </div>
  );
};

const TopicDetail = (props) => {
  console.log(props);
  return (
    <div>
      <h1>TOPIC DETAIL PAGE</h1>
    </div>
  );
};
function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/hats' component={HatsPage} />
      <Route exact path='/topics' component={TopicsList} />
      <Route path='/topics/:topicId' component={TopicDetail} />
    </div>
  );
}

export default App;
