import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';

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
        : <Grid>
          <Row>
          {heroes.map((hero, i) =>
            <Col xs={6} md={3} key={i}>
              <Thumbnail src="/assets/images/thumbnaildiv.png" alt="242x200">
                <h4><Link to={'/' + hero.id }>{hero.name}</Link></h4>
              </Thumbnail>
            </Col>
          )}
          </Row>
        </Grid>
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
