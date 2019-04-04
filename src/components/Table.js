import React from 'react'
import axios from 'axios'

class Table extends React.Component {
	constructor() {
		super()
	}

	componentDidMount() {
		axios.get('/api/teams').then((res) => console.log(res.data))
	}

	render() {
		return (
			<div>
				<p>Team</p>
			</div>
		)
	}
}

export default Table
