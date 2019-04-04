import React from 'react'

const Row = ({ club }) => {
	return (
		<div className="table-row">
			<p>{club.position}</p>
			<p>{club.team_name}</p>
			<p>{club.overall_w}</p>
			<p>{club.overall_d}</p>
			<p>{club.overall_l}</p>
			<p>{club.points}</p>
		</div>
	)
}

export default Row
