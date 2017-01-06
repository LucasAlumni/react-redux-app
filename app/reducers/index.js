import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import heroes from './heroes';
import hero from './hero';

const rootReducer = combineReducers({
  heroes,
  hero,
  routing
});

export default rootReducer;
