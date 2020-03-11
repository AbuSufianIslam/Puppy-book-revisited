import React, { Component } from 'react';

export default class SinglePuppy extends Component {
	componentDidMount() {
		this.props.loadSinglePuppy(this.props.match.params.puppyId);
	}

	render() {
		console.log(this.props);
		return (
			<div>
				<h2>{this.props.singlePuppy.name}</h2>
				<div>
					<img src={this.props.singlePuppy.image} />
				</div>
			</div>
		);
	}
}
