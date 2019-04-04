import React from 'react'
import ReactDOM from 'react-dom'
import './style.scss'

import Table from './components/Table'

class App extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div>
				<h1> Hello World</h1>
				<Table />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'))
