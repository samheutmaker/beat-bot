import React from 'react'
import { Route } from 'react-router'
import App from './App'
import BeatBot from './pages/BeatBot'

export default (
  <Route component={App}>
 	 <Route component={BeatBot} path="/" />
  </Route>
);
