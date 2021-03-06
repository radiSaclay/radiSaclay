import actionTypes from '../config/actionTypes';

const initialState = {
	errorMessage: null,
	errorStatus: null,
	isLoading: false,
	isMounted: false
}

export default function app(state = initialState, action) {
	switch (action.type) {
		case actionTypes.REDUX_STORAGE_LOAD:
			return {...state, isMounted: true}
		case actionTypes.APP_ERROR_REMOVE:
			return {...state, errorMessage: null, errorStatus: null}

		// User actions
		case actionTypes.USER_AUTHENTICATION_REQUEST:
			return{...state, isLoading: true}
		case actionTypes.USER_AUTHENTICATION_SUCCESS:
			return{...state, isLoading: false}
		case actionTypes.USER_AUTHENTICATION_ERROR:
			return {
				...state,
				errorMessage: action.errorMessage,
				errorStatus: action.errorStatus,
				isLoading: false
			}

		// Event actions
		case actionTypes.EVENTS_LIST_FETCH_REQUEST:
			return{...state, isLoading: true}
		case actionTypes.EVENTS_LIST_FETCH_SUCCESS:
			return{...state, isLoading: false}
		case actionTypes.EVENT_ERROR:
			return {
				...state,
				errorMessage: action.errorMessage,
				errorStatus: action.errorStatus,
				isLoading: false
			}

		// Farm actions
		case actionTypes.FARMS_LIST_FETCH_REQUEST:
			return{...state, isLoading: true}
		case actionTypes.FARMS_LIST_FETCH_SUCCESS:
			return{...state, isLoading: false}
		case actionTypes.FARM_ERROR:
			return {
				...state,
				errorMessage: action.errorMessage,
				errorStatus: action.errorStatus,
				isLoading: false
			}

		// Product actions
		case actionTypes.PRODUCTS_LIST_FETCH_REQUEST:
			return{...state, isLoading: true}
		case actionTypes.PRODUCTS_LIST_FETCH_SUCCESS:
			return{...state, isLoading: false}
		case actionTypes.PRODUCT_ERROR:
			return {
				...state,
				errorMessage: action.errorMessage,
				errorStatus: action.errorStatus,
				isLoading: false
			}

		// News actions
		case actionTypes.NEWS_FETCH_REQUEST:
			return{...state, isLoading: true}
		case actionTypes.NEWS_FETCH_SUCCESS:
			return{...state, isLoading: false}
		case actionTypes.NEWS_ERROR:
			return {
				...state,
				errorMessage: action.errorMessage,
				errorStatus: action.errorStatus,
				isLoading: false
			}

		default:
			return state
	}
}
