import actionTypes from '../config/actionTypes';

const initialState = {
	errorMessage: null,
	isLoading: false,
	isMounted: false
}

export default function app(state = initialState, action) {
	switch (action.type) {
		case actionTypes.REDUX_STORAGE_LOAD:
			return {...state, isMounted: true}
		case actionTypes.APP_ERROR_REMOVE:
			return {...state, errorMessage: null}

		// User actions
		case actionTypes.USER_AUTHENTICATION_REQUEST:
			return{...state, isLoading: true}
		case actionTypes.USER_AUTHENTICATION_ERROR:
			return {
				...state,
				errorMessage: action.errorMessage,
				isLoading: false
			}

		default:
			return state
	}
}