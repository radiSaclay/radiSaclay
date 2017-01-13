import React, { Component } from 'react';
import {
	ActivityIndicator,
	AsyncStorage,
	ListView,
	View
} from 'react-native';

import settings from '../../config/settings.js'
import styles from './styles';

import EventContainer from '../../components/Event'

class EventsList extends Component {
	constructor() {
		super();
		this.state = {
			dataSource: null,
			isLoaded: false
		};
	}

	componentWillMount(){
		this.getEvents();
	}

	getEvents() {
		AsyncStorage.getItem(settings.keys.ID_TOKEN).then((idToken) => {
			fetch(settings.urls.EVENTS_URL, {
				method: "GET",
				headers: {
					'Authorization': idToken
				}
			})
			.then((response) => response.json())
			.then((responseJson) => {
				const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
				this.setState({
					dataSource: ds.cloneWithRows(responseJson),
					isLoaded: true
				})
			})
			.catch((error) => {
				console.error(error);
			})
		})
	}

	// TODO: the route doesn't return the producer name for the moment. Update the producer prop once the route is updated
	renderRow(rowData) {
		return (
			<EventContainer
				endDate={rowData.endAt}
				eventId={rowData.id}
				producer={rowData.producer}
				product={rowData.description}
			/>
		)
	}

	render() {
		if (!this.state.isLoaded){
			return(
				<ActivityIndicator />
			)
		} else{
			return (
				<View style = {styles.container}>
					<ListView
						dataSource={this.state.dataSource}
						renderRow={this.renderRow}
						renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
					/>
				</View>
			)
		}
	}
}

export default EventsList;
