import productReducer from '../../app/reducers/productReducer'
import * as productActions from '../../app/actions/productActions'

describe('Product reducer', () =>{
	it('should return the initialState', () => {
		let expectedState = {
			error: null,
			isLoading: false,
			products: []
		}
		expect(productReducer(undefined, {})).toEqual(expectedState)
	})

	it('should handle PRODUCTS_LIST_FETCH_REQUEST', () => {
		let expectedState = {
			error: null,
			isLoading: true,
			products: []
		}
		expect(productReducer(undefined, productActions.productsListFetchRequest())).toEqual(expectedState)
	})

	it('should handle PRODUCTS_LIST_FETCH_SUCCESS', () => {
		let products = [
			{
				"id": 1,
				"name": "radis",
				"subscribed": false,
				"farms": [1, 2],
				"subproducts": [3, 4],
				"ancestors": [1],
			},
			{
				"id": 2,
				"name": "poulet",
				"subscribed": true,
				"farms": [1, 2],
				"subproducts": [3, 4],
				"ancestors": [1],
			},
		]
		let expectedState = {
			error: null,
			products: products,
			isLoading: false
		}
		expect(productReducer(undefined, productActions.productsListFetchSuccess(products))).toEqual(expectedState)
	})

	it('should handle PRODUCTS_LIST_FETCH_ERROR', () => {
		let error = new Error()
		let expectedState = {
			error: error,
			isLoading: false,
			products: []
		}
		expect(productReducer(undefined, productActions.productsListFetchError(error))).toEqual(expectedState)
	})

})