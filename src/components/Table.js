import React from 'react'
import axios from 'axios'
import Row from './Row'

class Table extends React.Component {
	constructor() {
		super()

		this.state = {}
	}

	componentDidMount() {
		axios.get('/api/teams').then((res) => this.setState({ clubs: res.data }))
	}

	render() {
		return (
			<div id="table">
				<div className="table-row headers">
					<h3>Position</h3>
					<h3>Club</h3>
					<h3>Wins</h3>
					<h3>Draws</h3>
					<h3>Losses</h3>
					<h3>Points</h3>
				</div>
				{this.state.clubs &&
					this.state.clubs.map((club) => <Row key={club.team_id} club={club} />)}
			</div>
		)
	}
}

export default Table
