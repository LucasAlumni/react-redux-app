import { 
	GET_HEROES_REQUEST,
	GET_HEROES_SUCCESS,
	GET_HEROES_FAILURE,
} from '../constants/heroes';

const heroes = (state = {list: []}, action) => {
    switch (action.type) {
        case GET_HEROES_REQUEST:
            return Object.assign({}, state, {
                isLoading: true,
                error: null
            })
        case GET_HEROES_FAILURE:
            return Object.assign({}, state, {
                isLoading: false,
                error: action.error
              })
        case GET_HEROES_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                list: action.payload.data.results,
                error: null
            })
        default:
            return state;
    }
};

export default heroes;