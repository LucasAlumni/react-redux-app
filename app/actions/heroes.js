import fetch from 'isomorphic-fetch';

import {
	BASE_URL,
	API_PUBLIC,
	TS,
	hashAPI
} from '../constants/api';

import { 
	GET_HEROES_REQUEST,
	GET_HEROES_SUCCESS,
	GET_HEROES_FAILURE,
} from '../constants/heroes';

export function getHeroes() {
	return (dispatch) => {
		dispatch({ type: GET_HEROES_REQUEST });
		return fetch(BASE_URL + '/v1/public/characters?ts=' + TS + '&apikey=' + API_PUBLIC + '&hash=' + hashAPI, {
	      method: 'get',
	    }).then(res => {
	    	return res.json();
	    })
	    .then(data => {
	    	dispatch({ type: GET_HEROES_SUCCESS, payload: data });
	    })
	    .catch(error => dispatch({ type: GET_HEROES_FAILURE, error }));
	}
}