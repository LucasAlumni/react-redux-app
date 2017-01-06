import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { PageHeader } from 'react-bootstrap';

const App = ({ children }) =>
    <div>
        <PageHeader>React-Redux App <small>for vente-privé</small></PageHeader>
        <section>
        { children }
        </section>
    </div>;

App.PropTypes = {
    children: PropTypes.object
}

export default App;
