import { 
	GET_HERO_REQUEST,
	GET_HERO_SUCCESS,
	GET_HERO_FAILURE,
} from '../constants/hero';

const initState = {
    name: '',
    description: '',
    info: [],
    series: [],
    comics: []
}

const hero = (state = initState, action) => {
    switch (action.type) {
        case GET_HERO_REQUEST:
            return Object.assign({}, state, {
                isLoading: true,
                error: null
            })
        case GET_HERO_FAILURE:
            return Object.assign({}, state, {
                isLoading: false,
                error: action.error
          })
        case GET_HERO_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                name: action.payload[0].name,
                desc: action.payload[0].description,
                series: action.payload[0].series.items,
                comics: action.payload[0].comics.items,
                error: null
            })
        default:
            return state;
    }
};

export default hero;