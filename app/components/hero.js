import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'
import { Grid, Button, ListGroup, ListGroupItem, Glyphicon } from 'react-bootstrap';

import { getHero } from '../actions/hero';

class Hero extends Component {

  componentDidMount () {
    this.props.getHero(this.props.params.heroId);
  }

  render() {
    const { name, desc, heroIsLoading, heroSeries, heroComics } = this.props;

    return (
      typeof heroIsLoading == 'undefined' || heroIsLoading == true
        ? <div>Loading ...</div>
        : <Grid>
            <Button onClick={browserHistory.goBack}><Glyphicon glyph="glyphicon glyphicon-arrow-left" /> Retour</Button>
            <h2>{name}</h2>
            <h4>{desc}</h4>
            <ListGroup>
              <h5>Comics :</h5>
              {heroComics.map((comic, i) =>
                <ListGroupItem key={i}>{comic.name}</ListGroupItem>
              )}
            </ListGroup>
            <ListGroup>
              <h5>Series :</h5>
              {heroSeries.map((serie, i) =>
                <ListGroupItem key={i}>{serie.name}</ListGroupItem>
              )}
            </ListGroup>
        </Grid>
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
