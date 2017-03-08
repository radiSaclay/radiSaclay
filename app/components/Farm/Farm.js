import React, { Component } from 'react'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'

import promises from '../../config/promises'
import settings from '../../config/settings'

import ListItem from '../ListItem';

class Farm extends Component {

	getFarmDetail() {
		promises.getWithToken(settings.urls.FARMS_URL + this.props.id, this.props.idToken)
		.then((response) => {
			Actions.FarmDetailRoute(response.data)
		})
		.catch((error) => {
			console.error(error.response.data)
		})
	}

	render() {
		return(
			<ListItem
				onTouchCallback={this.getFarmDetail.bind(this)}

				subtitle={this.props.address}
				title={this.props.name}
			/>
		);
	}
}

Farm.propTypes = {
	// from parent
	address: React.PropTypes.string,
	id: React.PropTypes.number,
	name: React.PropTypes.string,

	// from redux
	idToken: React.PropTypes.string,
}

const mapStateToProps = (store) => {
	return {
		idToken: store.user.idToken,
	}
}

export default connect(mapStateToProps)(Farm)
