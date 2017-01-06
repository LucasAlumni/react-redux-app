import fetch from 'isomorphic-fetch';

import { 
	GET_HERO_REQUEST,
	GET_HERO_SUCCESS,
	GET_HERO_FAILURE,
} from '../constants/hero';

import {
	BASE_URL,
	API_PUBLIC,
	TS,
	hashAPI
} from '../constants/api';

export function getHero(id) {
	console.log(BASE_URL, TS, API_PUBLIC, hashAPI);
	return (dispatch) => {
		dispatch({ type: GET_HERO_REQUEST });
		return fetch(BASE_URL + '/v1/public/characters/'+ id + '?ts=' + TS + '&apikey=' + API_PUBLIC + '&hash=' + hashAPI, {
	      method: 'get',
	    }).then(res => {
	    	return res.json();
	    })
	    .then(response => {
	    	dispatch({ type: GET_HERO_SUCCESS, payload: response.data.results });
	    })
	    .catch(error => dispatch({ type: GET_HERO_FAILURE, error }));
	}
}