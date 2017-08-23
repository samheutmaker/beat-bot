import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import { Router, RouterContext, match, HistoryLocation } from 'react-router';
import routes from './src/js/Routes'

if(typeof document !== 'undefined') {	
	match({ routes, location: window.location.pathname }, function(error, redirectLocation, renderProps){
		ReactDOM.render(<RouterContext {...renderProps} />, document );
	});
}

export default (locals, callback) => {
  const location = locals.path;
  match({ routes, location }, (error, redirectLocation, renderProps) => {
   callback(null, '<!DOCTYPE html>' + ReactDOMServer.renderToString(<RouterContext {...renderProps} />));
  });
};