import React from 'react';
import './AlertPanel.scss';

import { ResponsiveBar } from '@nivo/bar';
import { useHistory } from 'react-router-dom';

export default function AlertPanel(props) {
	const history = useHistory();

	const theme = {
		axis: {
			ticks: {
				text: {
					fill: 'white',
					fontSize: '.8rem',
				},
			},
			legend: {
				text: {
					fill: 'white',
					fontSize: '1rem',
				}
			},
		}
	};
		
	const colors = {
		'Pending Order': '#FDBB84',
		'Std. Aged Order': '#FC8D59',
		'Exp. Aged Order': '#EF6548',
		'Std. Approval': '#D73020',
		'Exp. Approval': '#B30000',
	};

	const getColors = bar => colors[bar.indexValue];

	return (
		<div className='dashboard-panel status-day-count-panel'>
			<p className='panel-header'>Alerts</p>
			<div className='chart-container'>
				<ResponsiveBar
					onClick={event => history.push(`/details/${event.data.dbName}`)}
					data={props.alertCount}
					keys={[ 'Count' ]}
					indexBy="alertName"
					margin={{ top: 5, right: 0, bottom: 85, left: 50 }}
					padding={0.3}
					layout="vertical"
					// colors={[ '#CE1256', '#2B8CBE', '#41AE76', '#FC8D59', '#807DBA' ]}
					colors={getColors}
					colorBy='index'
					theme={theme}
					enableGridX={false}
					enableGridY={true}
					axisTop={null}
					axisRight={null}
					axisBottom={{
							tickSize: 5,
							tickPadding: 5,
							tickRotation: -30,
							legend: 'Type',
							legendPosition: 'middle',
							legendOffset: 70,
					}}
					axisLeft={{
							tickSize: 5,
							tickPadding: 5,
							tickRotation: 0,
							legend: 'Count',
							legendPosition: 'middle',
							legendOffset: -40,
					}}
					labelSkipWidth={12}
					labelSkipHeight={12}
					labelTextColor={'black'}
					animate={true}
					motionStiffness={90}
					motionDamping={15}
				/>
			</div>
		</div>
	)
}
