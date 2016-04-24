var React = require('react');

var ReactDOM = require('react-dom');

var Board = React.createClass({

	render: function() {

		return (
			<div className="board">
				<Store />
			</div>

		)
	}

});

var Store = function() {
	var storeName = "Trader Joes";
	var storeName2 = "Sprouts";
	var storeName3 = "Albertsons";
		return (
			<div>
				<div className="store">
				{storeName}
				<Item itemName="Coffee" />
				<Item itemName="Beer" />
				</div>

				<div className="store">
				{storeName2}
				<Item itemName="Nuts" />
				<Item itemName="Fruit" />
				</div>

				<div className="store">
				{storeName3}
				<Item itemName="Meat" />
				<Item itemName="Eggs" />
				</div>
			</div>
		)
};

var Item = React.createClass({
	getInitialState: function() {
		return {
			highlight: false
		};
	},
	onClick: function() {
		this.setState({
			highlight: !this.state.highlight
		});
	},
	render: function() {
		var classes = 'panel panel-primary item ' + (this.state.highlight ? 'highlight' : '');
		return (
			<div className={classes} onClick={this.onClick}>
			<span className="itemName">{this.props.itemName}</span>
			<span className="coupon">Coupon</span>
			</div>
		);
	}

});

ReactDOM.render(<Board />, document.getElementById('app'))


