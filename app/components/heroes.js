import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { getHeroes } from '../actions/heroes';


class Heroes extends Component {
	componentDidMount () {
		this.props.getHeroes();
	}
	render () {
		const { 
			heroes,
			heroesIsLoading,
		} = this.props;

		return(
			heroesIsLoading
				? <div>Loading ...</div>
				: <div>
					<ul>
					{heroes.map((hero, i) =>
			          <li key={i}><Link to={'/' + hero.id }>{hero.name}</Link></li>
			        )}
			        </ul>
				</div>
		);
	}
};

Heroes.propTypes = {
	getHeroes: PropTypes.func,
	heroes: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  const heroes = state.heroes.list;
  const heroesIsLoading = state.heroes.isLoading;

  return {
    heroes,
    heroesIsLoading
  }
};


export default connect(mapStateToProps,
     { getHeroes }
 )(Heroes);