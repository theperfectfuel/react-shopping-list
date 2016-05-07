var React = require('react');

var ReactDOM = require('react-dom');

var storesObj = {
	stores: [
		{storeName: "Trader Joes", items: ["Coffee", "Beer", "Beef Jerky"]}, 
		{storeName: "Sprouts", items: ["Lettuce", "Nuts", "Cilantro"]}, 
		{storeName: "Albertsons", items: ["Eggs", "Meat", "Tejava"]}
	]
};

class Board extends React.Component {

	render() {
		var stores = [];
		for (var i = 0; i < 3; i++) {
			stores.push(<Store key={i} storeName={storesObj.stores[i].storeName} items={storesObj.stores[i].items} />);
			//console.log(storesObj.stores[0].items);
		}
		return (
			<div className="board">
				{stores}
			</div>
		);
	}
}

class Store extends React.Component {

	constructor(props, context) {
		super(props, context);

		this.state = {
			clicked: false,
			btnText: "Click This"
		};
	};

	onButtonClick() {
		this.setState({clicked: !this.state.clicked});
		console.log(this.state.clicked);
	}

	onInputChange() {
		//this.setState({btnText: this.props.btnText});
		console.log("hello");
		console.log(this.state.btnText);
	}

	render() {

		var itemList = [];
		
		for (var x = 0; x < this.props.items.length; x++) {
			itemList.push(<Item key={x} itemName={this.props.items[x]} />);
		}

		return (
			<div>
				<div className="store">
				{this.props.storeName}
				{itemList}
				<ItemInput onClick={this.onButtonClick.bind(this)} onChange={this.onInputChange.bind(this)} btnText={this.state.btnText} />
				</div>
			</div>
		);
	}
}

class Item extends React.Component{

	constructor(props, context) {
		super(props, context);

		this.state = {
			highlight: false
		};
	};

	onClick() {
		this.setState({highlight: !this.state.highlight});
	}

	render() {
		var classes = 'panel panel-primary item ' + (this.state.highlight ? 'highlight' : '');
		return (
			<div className={classes} onClick={this.onClick.bind(this)}>
			<span className="itemName">{this.props.itemName}</span>
			<span className="coupon">Coupon</span>
			</div>
		);
	}

}

class ItemInput extends React.Component{

	render() {
		return (
			<div className="input-area">
				<input onChange={this.props.onChange} type="text" />
				<button onClick={this.props.onClick} className="btn btn-large btn-primary my-button">
					{this.props.btnText}
				</button>
			</div>
		);
	}

}

ReactDOM.render(<Board />, document.getElementById('app'))


