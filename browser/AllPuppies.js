import React from 'react';
import { Link } from 'react-router-dom';

export default class AllPuppies extends React.Component {
	componentDidMount() {
		this.props.loadAllPuppies();
	}

	render() {
		// const puppies = this.props.puppies;
		return (
			<div>
				<ul className="list-unstyled">
					{this.props.puppies.map((puppy) => (
						<li key={puppy.id}>
							<Link to={`/puppies/${puppy.id}`}>{puppy.name}</Link>
						</li>
					))}
				</ul>
			</div>
		);
	}
}
