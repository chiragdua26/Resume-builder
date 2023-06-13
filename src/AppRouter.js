import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ResumeForm from './ResumeForm';
import ResumeView from './ResumeView';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ResumeForm} />
        <Route path="/view" component={ResumeView} />
        <Route path="/edit" component={ResumeForm} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
