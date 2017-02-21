import eventReducer from '../../app/reducers/eventReducer'
import * as eventActions from '../../app/actions/eventActions'

describe('Event reducer', () =>{
	it('should return the initialState', () => {
		let expectedState = {
			events: [],
			error: null,
			isLoading: false
		}
		expect(eventReducer(undefined, {})).toEqual(expectedState)
	})

	it('should handle EVENTS_LIST_FETCH_REQUEST', () => {
		let expectedState = {
			isLoading: true
		}
		expect(eventReducer([], eventActions.eventsListFetchRequest())).toEqual(expectedState)
	})

	it('should handle EVENTS_LIST_FETCH_SUCCESS', () => {
		let events = [
			{
				"id": 1,
				"title": "Vente de Radis",
				"description": "C'est la folie! Ce weekend il y a cuiellette de radis",
				"publishAt": "2017-01-01",
				"BeginAt": "2017-01-01",
				"EndAt": "2017-01-30",
				"pinned": true,
				"farmId": 1,
				"products": []
			},
			{
				"id": 2,
				"title": "Vente de Tomates",
				"description": "C'est la folie! Ce weekend il y a cuiellette de tomates",
				"publishAt": "2017-01-01",
				"BeginAt": "2017-01-01",
				"EndAt": "2017-01-30",
				"pinned": false,
				"farmId": 2,
				"products": []
			},
		]
		let expectedState = {
			events: events,
			isLoading: false
		}
		expect(eventReducer([], eventActions.eventsListFetchSuccess(events))).toEqual(expectedState)
	})

	it('should handle EVENTS_LIST_FETCH_ERROR', () => {
		let error = new Error()
		let expectedState = {
			error: error,
			isLoading: false
		}
		expect(eventReducer([], eventActions.eventError(error))).toEqual(expectedState)
	})

	it('should handle EVENT_TOGGLE_PINNED_STATUS', () => {
		let initialState = {
			events: [
				{
					"id": 1,
					"title": "Vente de Radis",
					"description": "C'est la folie! Ce weekend il y a cuiellette de radis",
					"publishAt": "2017-01-01",
					"BeginAt": "2017-01-01",
					"EndAt": "2017-01-30",
					"pinned": false,
					"farmId": 1,
					"products": []
				},
				{
					"id": 2,
					"title": "Vente de Radis",
					"description": "C'est la folie! Ce weekend il y a cuiellette de radis",
					"publishAt": "2017-01-01",
					"BeginAt": "2017-01-01",
					"EndAt": "2017-01-30",
					"pinned": false,
					"farmId": 1,
					"products": []
				}
			]
		}

		let eventId = 1
		let pinnedStatus = true

		let expectedState = {
			events: [
				{
					"id": 1,
					"title": "Vente de Radis",
					"description": "C'est la folie! Ce weekend il y a cuiellette de radis",
					"publishAt": "2017-01-01",
					"BeginAt": "2017-01-01",
					"EndAt": "2017-01-30",
					"pinned": true,
					"farmId": 1,
					"products": []
				},
				{
					"id": 2,
					"title": "Vente de Radis",
					"description": "C'est la folie! Ce weekend il y a cuiellette de radis",
					"publishAt": "2017-01-01",
					"BeginAt": "2017-01-01",
					"EndAt": "2017-01-30",
					"pinned": false,
					"farmId": 1,
					"products": []
				}
			]
		}
		expect(eventReducer(initialState, eventActions.eventTogglePinnedStatus(eventId, pinnedStatus))).toEqual(expectedState)
	})
})
