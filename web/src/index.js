import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routes/appRouter';
import ReduxWrapper from './state/reduxWrapper'

ReactDOM.render(
  <ReduxWrapper>
    <AppRouter />
  </ReduxWrapper>, document.getElementById('root'));
