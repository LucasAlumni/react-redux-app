import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import { getHero } from '../actions/hero';

class Hero extends Component {

  componentDidMount () { 
  	this.props.getHero(this.props.params.heroId);
  }

  render() {
    const { name, desc, heroIsLoading, heroSeries, heroComics } = this.props;

    return (
    	typeof heroIsLoading == 'undefined' || heroIsLoading == true
	    	? <div>isLoading</div>
			: <div>
		        <h2>{name}</h2>
		        <h4>{desc}</h4>
		        <div>
			        <h5>Comics :</h5>
			        {heroComics.map((comic, i) =>
			          <li key={i}>{comic.name}</li>
			        )}
			    </div>
		        <div>
			        <h5>Series :</h5>
			        {heroSeries.map((serie, i) =>
			          <li key={i}>{serie.name}</li>
			        )}
			    </div>
		    </div>
    );
  }
}

Hero.propTypes = {
    name: PropTypes.string,
    desc: PropTypes.string,
    heroIsLoading: PropTypes.bool,
    heroSeries: PropTypes.array,
    heroComics: PropTypes.array,
    getHero: PropTypes.func,
};

function mapStateToProps(state) {
  const heroIsLoading = state.hero.isLoading;
  const heroSeries = state.hero.series;
  const heroComics = state.hero.comics;
  const name = state.hero.name;
  const desc = state.hero.desc;

  return {
  	name,
  	desc,
    heroIsLoading,
    heroSeries,
    heroComics
  }
}


export default connect(mapStateToProps,
     { getHero }
 )(Hero);