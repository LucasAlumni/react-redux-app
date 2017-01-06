import React, { PropTypes } from 'react';
import { Link } from 'react-router';
 
const App = ({ children }) =>
    <div>
        <header>
        	<h1>React-Redux App for vente-privé</h1>
        </header>
        <section>
    		{ children }
    	</section>
    </div>;

App.PropTypes = {
    children: PropTypes.object
}
 
export default App;