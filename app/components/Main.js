var React = require('react');

var ReactDOM = require('react-dom');

var storesObj = {
	stores: [
		{storeName: "Trader Joes", items: ["Coffee", "Beer", "Beef Jerky"]}, 
		{storeName: "Sprouts", items: ["Lettuce", "Nuts", "Cilantro"]}, 
		{storeName: "Albertsons", items: ["Milk", "Meat"]}
	]
};

var Board = React.createClass({

	render: function() {
		var stores = [];
		for (var i = 0; i < 3; i++) {
			stores.push(<Store storeName={storesObj.stores[i].storeName} items={storesObj.stores[i].items} />);
			//console.log(storesObj.stores[0].items);
		}
		return (
			<div className="board">
				{stores}
			</div>
		);
	}
});

var Store = function(props) {
	var items = [];
	for (var i = 0; i < props.items.length; i++) {
		items.push(<Item itemName={props.items[i]} />);
	}

		return (
			<div>
				<div className="store">
				{props.storeName}
				{items}
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


