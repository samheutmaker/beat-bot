import React, { Component, PropTypes } from 'react';
import NPECheck from './lib/util/NPECheck'
import ActionBinder from './lib/util/ActionBinder'
import * as Actions from './actions/ACtions'

/* The top-level application component
 * @extends Component
 */
export default class App extends Component {
  static childContextTypes = {
    actions: PropTypes.object
  }
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
      ...Actions.getState()
    };
  }
  getChildContext(){
    return {
      actions: ActionBinder([
          Actions
        ], this)
    }
  }
  // Listen for resize
  componentDidMount() {
    window.addEventListener('resize', this.checkMobile.bind(this));
    this.checkMobile();
  }
  checkMobile(e){
      let width = document.body.clientWidth;
      if(width >= 960 && this.state.isMobile) {
        this.setState({
          isMobile: false,
          
        })
      }
      if(width <= 960 && !this.state.isMobile) {
        this.setState({
          isMobile: true,
        })
      }
  }
  renderHead() {
  	return (
  		<head>
  			<title>Beat Bot</title>
  			<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    		<meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500" rel="stylesheet"/>
        <link rel="stylesheet" href="/public/css/style.css"/>
		  </head>
  	);
  }
  render() {
		return (
			<html>
				{this.renderHead()}
				<body>
					{React.cloneElement(this.props.children, {...this.state}, null)}
		      <script src='/public/js/bundle.js' />
				</body>
			</html>
		);
	}
}
