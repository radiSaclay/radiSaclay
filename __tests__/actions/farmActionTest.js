import actionTypes from '../../app/config/actionTypes';
import * as farmActions from '../../app/actions/farmActions';

describe('Get farms from the API', () => {
	it('should create an action when fetch farms list request fires', () => {
		let expectedAction = {
			type: actionTypes.FARMS_LIST_FETCH_REQUEST,
		}
		expect(farmActions.farmsListFetchRequest()).toEqual(expectedAction)
	})

	it('should create an action when fetch farms list succeeds', () => {
		let farms = [
			{
				"id": 1,
				"name": "Farm 1",
				"website": "www.farm.com",
				"address": "123 rue de la ferme, 75000 Palaiseau",
				"phone": "+33123456789",
				"email": "farmer1@test.com",
				"subscribed": false,
				"ownerId": 1,
				"products": [1, 2, 3]
			},
			{
				"id": 2,
				"name": "Farm 2",
				"website": "www.farm.com",
				"address": "456 rue de la ferme, 75000 Palaiseau",
				"phone": "+33123456789",
				"email": "farmer2@test.com",
				"subscribed": true,
				"ownerId": 2,
				"products": [1, 2, 3]
			},
		]
		let expectedAction = {
			type: actionTypes.FARMS_LIST_FETCH_SUCCESS,
			farms
		}
		expect(farmActions.farmsListFetchSuccess(farms)).toEqual(expectedAction)
	})

	it('should create an action when fetch farms list raises an error', () => {
		let errorMessage = 'something awful happened'
		let errorStatus = 401
		let expectedAction = {
			type: actionTypes.FARM_ERROR,
			errorMessage,
			errorStatus
		}
		expect(farmActions.farmError(errorMessage, errorStatus)).toEqual(expectedAction)
	})
})

describe('Toggle farm subscribed status', () => {
	it('should create an action when toggle subscribed status fires', () => {
		let farmId = 1
		let subscribedStatus = true
		let expectedAction = {
			type: actionTypes.FARM_TOGGLE_SUBSCRIBED_STATUS,
			farmId,
			subscribedStatus
		}
		expect(farmActions.farmToggleSubscribedStatus(farmId, subscribedStatus)).toEqual(expectedAction)
	})
})
