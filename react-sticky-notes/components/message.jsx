import React from 'react';
import ReactDOM from 'react-dom';
var Message = React.createClass({
	render: function() {
		return <h1>Hello world!</h1>;
	}
});

ReactDOM.render(
  <Message />,
  document.getElementById('container')
);